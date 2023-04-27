import { useEffect, useState } from "react";
import handler from "./api/rooms";
import axios from 'axios'
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [columns, setColumns] = useState([])

  useEffect(() => {
    async function fetchDataAsync() {
      const res: any = await axios.get("/api/rooms");
      setRooms( res.data.rooms);
      const resColumn: any = await axios.get("/api/columns")
      setColumns(resColumn.data.columns)
    }
    fetchDataAsync();
  }, []);

  return (
    <div>
      <h3 className="text-center">List Rooms</h3>
      <table id="rooms">
        {
          columns.map((item) => {
            return <th>{item}</th>
          })
        }
        {rooms?.length > 0 &&
          rooms.map((room: any) => {
            return (
              <tr>
                <td>{room.number}</td>
                <td>{room.capacity}</td>
                <td>{room.availabelTimeSlot}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Rooms;
