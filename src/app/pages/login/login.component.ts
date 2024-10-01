import { Component, signal } from '@angular/core';
import { Login } from '../../models/login';
import { Register } from '../../models/register';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { UserFormComponent } from '../user-form/user-form.component';
import { ModelComponent } from "../../ui/model/model.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, UserFormComponent, ModelComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  login: Login = {
    login: "",
    password: ""
  }

  register: Register = {
    name: "",
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  onLogin() {
    this.authService.login(this.login).subscribe({
      next: (res: any) => {
        localStorage.setItem("token_angular", res.token)
        //const route = localStorage.getItem('redirectUrl') || ''
        //localStorage.removeItem('redirectUrl')
        const route = this.route.snapshot.queryParamMap.get('stateUrl') || ''
        console.log(route)
        this.router.navigateByUrl(route)
      },
      error: (res) => {
        alert(res.error)
      }
    })
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  isModelOpen = false;

  openModel() {
    this.isModelOpen = true
  }

  closeModel() {
    this.isModelOpen = false
  }
}
