import { Component ,OnInit} from '@angular/core';
import { Guest } from '../models/guest';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent {
  guest: Guest = new Guest();


  ngOnInit(): void {
  }

  saveGuest(): void {
  }
}
