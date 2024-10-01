import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private url = 'http://localhost:3000/places'
  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.url)
  }

  getPlaceByTitle(title: string | null): Observable<Place[]> | null {
    return this.http.get<Place[]>(this.url + '?title=' + title)
  }

  deletePlaceById(id: number): Observable<Place> {
    return this.http.delete<Place>(this.url + '/' + id)
  }
}
