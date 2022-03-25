import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Restaurant } from '../models/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

    url_api = 'http://127.0.0.1:4000/api/restaurant'

  constructor(private http:HttpClient){ }

  getRestaurant(): Observable<any>{
    return this.http.get(this.url_api);
  }
  postProduct(restaurant: Restaurant):Observable<any>{
    return this.http.post(this.url_api, restaurant)
  }
}