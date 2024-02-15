export interface Reservation {
  id?: number;
 roomNumber: string;
  guestName: string;
  numGuests: number;
  checkInData: Date;
  checkOutDate?: Date;
}
