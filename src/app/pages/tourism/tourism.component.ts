import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface SlideInterface {
  id: string;
  src: string;
  alt: string;
  title: string;
}


@Component({
  selector: 'app-tourism',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './tourism.component.html',
  styleUrl: './tourism.component.scss'
})
export class TourismComponent implements AfterViewInit {

  slidesStore = signal<SlideInterface[]>([
    { id: '1', src: 'https://coisasdojapao.com/wp-content/uploads/2017/07/palacio-imperial-japao.jpg  ', alt: 'Slide 1', title: 'Slide 1 Title' },
    { id: '2', src: 'https://i0.wp.com/globaldebauchery.com/wp-content/uploads/2018/07/global-debauchery-golden-gai-tokyo-japan.jpg?fit=665%2C444&ssl=1', alt: 'Slide 2', title: 'Slide 2 Title' },
    { id: '3', src: 'https://www.coisasdojapao.com/wp-content/uploads/2016/12/rsz_furano_teleferico_ver%C3%A3o.jpg', alt: 'Slide 3', title: 'Slide 3 Title' },
    { id: '4', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqYT6E4EF8E-eXYo34oAtRGVOujjQbbu1bA&s', alt: 'Slide 4', title: 'Slide 4 Title' },
    { id: '5', src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/32/10/70/caption.jpg?w=1200&h=1200&s=1', alt: 'Slide 5', title: 'Slide 5 Title' },
    { id: '6', src: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/459000/459437-Asahiyama-Zoo.jpg', alt: 'Slide 6', title: 'Slide 6 Title' }
  ]);

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild('slider') slider!: CarouselComponent;

  sliderOptions = signal<OwlOptions>({
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
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
}
