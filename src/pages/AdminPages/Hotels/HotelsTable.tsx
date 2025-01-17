import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getHotels} from '../Api/Api';
import { useQuery } from 'react-query';
import { Hotel } from '../type';
import { Button, Drawer } from '@mui/material';
import HotelForm from './HotelForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'description',
    headerName: 'description',
    flex: 1,
  },
  {
    field: 'hotelType',
    headerName: 'hotelType',
    flex: 1,
  },
  {
    field: 'starRating',
    headerName: 'starRating',
    flex: 1,
  }
];

const HotelsTable: React.FC = () => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [operation, setOperation] = useState<'add' | 'update'>('add');

  const { data, isLoading, error } = useQuery<Hotel[], Error>(
    ['hotels'],
    getHotels
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addHotel = () => {
    setSelectedHotel(null);
    setOperation('add');
    setOpen(true);
  }

  const updateHotel = (hotel:Hotel) => {
    setSelectedHotel(hotel);
    setOperation('update');
    setOpen(true);
  }

  const rows = data ?? [];

  return (
    <Box>
         <Button type='button' variant='contained' onClick={addHotel}>add</Button>
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
        onRowClick={(params) => updateHotel(params.row as Hotel)}
      />
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <Box width={400} padding={2}>
          <HotelForm
            operation={operation}
            hotel={selectedHotel}
            onClose={() => setOpen(false)}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default HotelsTable;
