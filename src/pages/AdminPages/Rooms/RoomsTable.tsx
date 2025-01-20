import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { addRoom, deleteRoom, getRooms,  updateRoom } from '../Api/Api';
import { Button, Drawer, Typography } from '@mui/material';
import RoomForm from './RoomForm';
import {  Room } from '../type';

const columns: GridColDef[] = [
  { field: 'roomroomId', headerName: 'roomId', width: 100 },
  {
    field: 'roomNumber',
    headerName: 'Number',
    width: 100,
  },
  {
    field: 'roomType',
    headerName: 'Type',
    width: 100,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'caparoomOfChildren',
    headerName: '# Children',
    width: 100,
  },
  {
    field: 'caparoomOfAdults',
    headerName: '# Adults',
    width: 100,
  },
  {
    field: 'availability',
    headerName: 'Availability',
    width: 100,
  },
  {
    field: 'roomPhotoUrl',
    headerName: 'Photo',
    width: 100,
  },
  {
    field: 'roomAmenities',
    headerName: 'Amenities',
    width: 100,
  },
];

const RoomsTable: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [operation, setOperation] = useState<'add' | 'update'>('add');
  const [rows, setRows] = useState<Room[]>([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const rooms = await getRooms();
      setRows(rooms);
    } catch (err) {
    }
  };

  fetchData();
}, []);
  
  
  const handelDelete = async () => {
    try {
      if (selectedRoom?.roomId) {
        await deleteRoom(selectedRoom?.roomId);
        setRows(rows.filter((room) => room.roomId !== selectedRoom?.roomId));
      }
    }
    catch (error) {
      
    }
  } 
  
  const handelUpdate = async (updatedRoom: Room) => {
    try {
      if (updatedRoom?.roomId) {
        await updateRoom(updatedRoom?.roomId, updatedRoom);
        setRows(rows.map((room) => (room.roomId === updatedRoom.roomId ? updatedRoom: room)));
      }
    }
     catch (error) {
       
     }

  };


const handelAdd = async (addedRoom: Room) => {
  try {
    await addRoom(addedRoom);
    setRows([...rows, addedRoom]);
  } catch (error) {
  }
};
  

  const handelAddRoom = () => {
    setSelectedRoom(null);
    setOperation('add');
    setOpen(true);
  }

  const handelUpdateRoom= (room:Room) => {
    setSelectedRoom(room);
    setOperation('update');
    setOpen(true);
  }


  

  return (
    <Box>
      <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
        <Typography variant="h4" component={'h2'}>Rooms</Typography>
        <Button type='button' variant='contained' onClick={handelAddRoom}>Add Room</Button>
        </Box>  
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        disableRowSelectionOnClick
        onRowClick={(params) => handelUpdateRoom(params.row as Room)}
      />
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <Box width={400} padding={2}>
          <RoomForm
            operation={operation}
            room={selectedRoom}
            onClose={() => setOpen(false)}
            Delete={handelDelete}
            update={(room: Room) => handelUpdate(room)}
            add={(room: Room) => handelAdd(room)}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default RoomsTable;
