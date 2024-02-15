import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{
  booking: Booking = new Booking();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.booking);
    // TODO: Send booking data to server
  }
}
