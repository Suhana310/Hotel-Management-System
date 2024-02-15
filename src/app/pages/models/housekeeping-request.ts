export class Housekeeping {
  id: number;
  roomNumber: number;
  description: string;
  status: string;
  created: Date;
  updated: Date;

  constructor(id: number, roomNumber: number, description: string, status: string, created: Date, updated: Date) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.description = description;
    this.status = status;
    this.created = created;
    this.updated = updated;
  }
}
