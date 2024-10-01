import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = 'http://localhost:3000/images'

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.url)
  }

  getImageById(id: number): Observable<Image> {
    return this.http.get<Image>(this.url + '/' + id)
  }

  getImageByPlace(place: string | null): Observable<Image[]> | null {
    return this.http.get<Image[]>(this.url + '?place=' + place)
  }
}
