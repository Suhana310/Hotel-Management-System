import { Component,OnInit } from '@angular/core';
import { Room } from '../models/room';

@Component({
  selector: 'app-roomservice',
  templateUrl: './roomservice.component.html',
  styleUrls: ['./roomservice.component.css']
})
export class RoomServiceComponent  {
  rooms: Room[];
  ngOnInit() {
    this.getRooms();
  }

}
