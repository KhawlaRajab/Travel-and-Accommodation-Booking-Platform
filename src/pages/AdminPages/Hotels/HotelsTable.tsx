import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {  addHotel,  getHotels,deleteHotel ,updateHotel} from '../Api/Api';
import {  Hotel } from '../type';
import { Button, Drawer, Typography } from '@mui/material';
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
  const [rows, setRows] = useState<Hotel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotels = await getHotels();
        setRows(hotels);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, []);
    
    
    const handelDelete = async () => {
      try {
        if (selectedHotel?.id) {
          await deleteHotel(selectedHotel?.id);
          setRows(rows.filter((hotel) => hotel.id !== selectedHotel?.id));
        }
      }
      catch (error) {
        console.log(error);
      }
    } 
    
    const handelUpdate = async (updatedHotel: Hotel) => {
      try {
        if (updatedHotel?.id) {
          await updateHotel(updatedHotel?.id, updatedHotel);
          setRows(rows.map((hotel) => (hotel.id === updatedHotel.id ? updatedHotel: hotel)));
        }
      }
       catch (error) {
         console.log(error);
       }
  
    };
  
  
  const handelAdd = async (addedHotel: Hotel) => {
    try {
      await addHotel(addedHotel);
      setRows([...rows, addedHotel]);
    } catch (error) {
      console.log(error);
    }
  };
    
  
    const handelAddHotel = () => {
      setSelectedHotel(null);
      setOperation('add');
      setOpen(true);
    }
  
    const handelUpdateHotel = (hotel:Hotel) => {
      setSelectedHotel(hotel);
      setOperation('update');
      setOpen(true);
    }
  
  

  return (
    <Box>
        <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
        <Typography variant="h4" component={'h2'}>Hotels</Typography>
        <Button type='button' variant='contained' onClick={handelAddHotel}>Add Hotel</Button>
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
        onRowClick={(params) => handelUpdateHotel(params.row as Hotel)}
      />
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <Box width={400} padding={2}>
          <HotelForm
            operation={operation}
            hotel={selectedHotel}
            onClose={() => setOpen(false)}
            Delete={handelDelete}
            update={(hotel: Hotel) => handelUpdate(hotel)}
            add={(hotel: Hotel) => handelAdd(hotel)}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default HotelsTable;
