
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../models/reservation';
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit{
  reservations: Reservation[];
  checkinForm: FormGroup;
  checkoutForm: FormGroup;

  constructor(

    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.checkinForm = this.formBuilder.group({
      roomNumber: ['', Validators.required],
      guestName: ['', Validators.required],
      checkinDate: ['', Validators.required],
    });
    this.checkoutForm = this.formBuilder.group({
      roomNumber: ['', Validators.required],
      guestName: ['', Validators.required],
      checkoutDate: ['', Validators.required],
    });
   
  }
}
