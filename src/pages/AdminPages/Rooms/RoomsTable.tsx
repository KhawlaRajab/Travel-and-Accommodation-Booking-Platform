import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getRooms } from '../Api/Api';
import { useQuery } from 'react-query';
import { room } from '../../HotelPage/type';
import { Button, Drawer } from '@mui/material';
import RoomForm from './RoomForm';

const columns: GridColDef[] = [
  { field: 'roomId', headerName: 'ID', width: 100 },
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
    field: 'capacityOfChildren',
    headerName: '# Children',
    width: 100,
  },
  {
    field: 'capacityOfAdults',
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
  const [selectedRoom, setSelectedRoom] = useState<room | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [operation, setOperation] = useState<'add' | 'update'>('add');
  const { data, isLoading, error } = useQuery<room[], Error>(
    ['rooms'],
    getRooms
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addRoom = () => {
    setSelectedRoom(null);
    setOperation('add');
    setOpen(true);
  }

  const updateRoom = (room:Room) => {
    setSelectedRoom(room);
    setOperation('update');
    setOpen(true);
  }

  const rows = data ?? [];

  return (
    <Box>
         <Button type='button' variant='contained' onClick={addRoom}>add</Button>
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
        onRowClick={(params) => updateRoom(params.row as room)}
      />
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <Box width={400} padding={2}>
          <RoomForm
            operation={operation}
            room={selectedRoom}
            onClose={() => setOpen(false)}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default RoomsTable;
