import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    url_api = 'http://127.0.0.1:4000/api/booking';

    constructor(private http:HttpClient) { }

    getBookings(): Observable<any>{
        return this.http.get(this.url_api);
    }

    postBooking(Booking: Booking): Observable<any>{
        return this.http.post(this.url_api, Booking);
    }

    getBooking(id: String): Observable<any>{
        // return this.http.get(this.url_api + id)
        return this.http.get(`${this.url_api}/${id}`)
    }

    putBooking(id: String, booking: Booking): Observable<any>{
        return this.http.put(`${this.url_api}/${id}`, booking)
    }

    deleteBooking(id: String): Observable<any>{
        return this.http.delete(`${this.url_api}/${id}`)
    }
}
