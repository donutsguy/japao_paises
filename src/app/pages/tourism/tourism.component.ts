import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Image } from '../../models/image';
import { Place } from '../../models/place';
import { ImageService } from '../../services/image.service';
import { PlaceService } from '../../services/place.service';
import { ModelComponent } from '../../ui/model/model.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlaceDeleteConfirmationComponent } from '../place-delete-confirmation/place-delete-confirmation.component';

@Component({
  selector: 'app-tourism',
  standalone: true,
  imports: [CarouselModule, CommonModule, ModelComponent],
  templateUrl: './tourism.component.html',
  styleUrl: './tourism.component.scss'
})
export class TourismComponent implements OnInit {
  places = signal<Place[]>([])

  images = signal<Image[]>([])

  constructor(private imageService: ImageService, private placeService: PlaceService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe((data) => {
      this.images.set(data)
    })

    this.placeService.getPlaces().subscribe((data) => {
      this.places.set(data)
    })
  }

  getImagesForPlace(placeId: string) {
    return this.images().filter(image => image.place_id === placeId);
  }

  @ViewChild('slider') slider!: CarouselComponent;

  sliderOptions = signal<OwlOptions>({
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  })

  isModelOpen = false;

  isDeleteModelOpen = false;

  openDeleteModel(id: string) {
    const placeId: number = Number(id)
    const dialogRef = this.dialog.open(PlaceDeleteConfirmationComponent, {
      width: '250px',
      data: { placeId: placeId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deletePlace(placeId);
      }
    });
  }

  closeDeleteModel() {
    this.isDeleteModelOpen = false
  }

  openModel() {
    this.isModelOpen = true
  }

  closeModel() {
    this.isModelOpen = false
  }

  showSuccess(): void {
    this.snackBar.open('Card successfully deleted', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar', 'snackbar-success']
    });
  }

  deletePlace(id: number) {
    this.placeService.deletePlaceById(id).subscribe((_data) => { })
    this.showSuccess()
    this.placeService.getPlaces().subscribe((data) => {
      this.places.set(data)
    })
  }
}
