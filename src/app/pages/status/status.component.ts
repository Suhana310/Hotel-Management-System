import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  @Input() currentStatus: string;
  @Output() statusUpdated = new EventEmitter<string>();

  selectedStatus: string;
  statusOptions: string[] = ['cleaning', 'occupied', 'available', 'out of order'];

  updateStatus() {
    this.statusUpdated.emit(this.selectedStatus);
  }
}
