import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TourismComponent } from './pages/tourism/tourism.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tourism',
        component: TourismComponent
    }
];
