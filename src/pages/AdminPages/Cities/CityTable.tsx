import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getCities } from '../Api/Api';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { City } from '../type';
import { Button, Drawer } from '@mui/material';
import { addCity, deleteCity, updateCity } from "../Api/Api";
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
  const queryClient = useQueryClient();
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [operation, setOperation] = useState<'add' | 'update'>('add');
  // const [rows, setRows] = useState<City[]>([]);
  const { data, isLoading, error } = useQuery<City[], Error>
    (['cities'], getCities);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const rows = data || [];
  
  // const addMutation = useMutation(addCity, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('cities');
  //     setOpen(false);
  //   },
  // });

  // const updateMutation = useMutation((city: City) => 
  //   updateCity(selectedCity!.id, city), 
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('cities');
  //     },
  //   }
  // );

  // const deleteMutation = useMutation(deleteCity, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('cities');

  //   },
  // });


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
      <Button type='button' variant='contained' onClick={handelAddCity}>add</Button>
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
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default CityTable;
