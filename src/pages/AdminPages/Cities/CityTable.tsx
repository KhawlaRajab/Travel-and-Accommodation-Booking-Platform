import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { addCity, deleteCity, getCities, updateCity } from '../Api/Api';
import { City } from '../type';
import { Button, Drawer, Typography } from '@mui/material';
import CityForm from './CityForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID',flex:1},
  {
    field: 'name',
    headerName: 'Name',
    flex:2
  },
  {
    field: 'description', 
    headerName: 'Description',
    flex:6,
  },
];

const CityTable: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [operation, setOperation] = useState<'add' | 'update'>('add');
  const [rows, setRows] = useState<City[]>([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const cities = await getCities();
      setRows(cities);
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, []);
  
  
  const handelDelete = async () => {
    try {
      if (selectedCity?.id) {
        await deleteCity(selectedCity?.id);
        setRows(rows.filter((city) => city.id !== selectedCity?.id));
      }
    }
    catch (error) {
       console.log(error);      
    }
  } 
  
  const handelUpdate = async (updatedCity: City) => {
    try {
      if (updatedCity?.id) {
        await updateCity(updatedCity?.id, updatedCity);
        setRows(rows.map((city) => (city.id === updatedCity.id ? updatedCity: city)));
      }
    }
     catch (error) {
       console.log(error);       
     }

  };


const handelAdd = async (addedCity: City) => {
  try {
    await addCity(addedCity);
    setRows([...rows, addedCity]);
  } catch (error) {
       console.log(error);  }
};
  

  const handelAddCity = () => {
    setSelectedCity(null);
    setOperation('add');
    setOpen(true);
  }

  const handelUpdateCity = (city:City) => {
    setSelectedCity(city);
    setOperation('update');
    setOpen(true);
  }


  

  return (
    <Box >
      <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}>
        <Typography variant="h4" component={'h2'}>Cities</Typography>
        <Button type='button' variant='contained' onClick={handelAddCity}>Add City</Button>
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
        onRowClick={(params) => handelUpdateCity(params.row as City)}
      />
      <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <Box width={400} padding={2}>
          <CityForm
            operation={operation}
            city={selectedCity}
            onClose={() => setOpen(false)}
            Delete={handelDelete}
            update={(city: City) => handelUpdate(city)}
            add={(city: City) => handelAdd(city)}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default CityTable;
