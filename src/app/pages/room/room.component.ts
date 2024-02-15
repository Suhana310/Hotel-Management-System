import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../models/room';
import { RoomType } from '../models/roomtype';
import { RoomStatus } from '../models/roomstatus';
import {  FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomId: string;

  room: Room[];
  roomtype: RoomType[];
  roomstatus: RoomStatus;
  roomForm: FormGroup;


  onSubmit() {
    const formData = this.roomForm.value;
    // TODO: Send the form data to a backend API or service to add the new room
  }
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

  }
  bookRoom(): void {
    // Book the room


  }

  cancelBooking(): void {
    // Cancel the booking of the room


  }
  addRoom(): void {
    // code to add a new room
  }

  editRoom(room: Room): void {
    // code to edit a room
  }

  deleteRoom(room: Room): void {
    // code to delete a room
  }
}
