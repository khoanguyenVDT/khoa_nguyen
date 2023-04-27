export class RoomModal {
    roomNumber: number
    capacity: String
    slots: number
    constructor(roomNumber: number, capacity: String, slots: number) {
      this.roomNumber = roomNumber;
      this.capacity = capacity;
      this.slots = slots;
    }
  };
