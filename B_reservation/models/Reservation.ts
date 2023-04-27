export class Reservation {
    public roomNumber: number
    public date: Date
    public startTime: Date
    public endTime: Date
    public nameCustomer: String

    constructor(roomNumber: number, date: Date, startTime: Date, endTime: Date, nameCustomer: String) {
        this.roomNumber = roomNumber;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime
        this.nameCustomer = nameCustomer
      }
}