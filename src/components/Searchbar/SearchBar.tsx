import { FormikProvider, Form, useFormik } from "formik";
import {  Button, Container, Popover, Rating, Stack, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { DateIntialValue, intialValues } from "./constatnt";
import { DateType, SearchParam } from "./type";
import { DateRange } from 'react-date-range'
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import CountPeople from "./CountPeople";
// import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css' 
import { useSearchContext } from "./SearchContext";
import { useNavigate } from "react-router-dom";



const SearchBar: React.FC = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState<DateType[]>(DateIntialValue);
    const [dateAnchorEl, setDateAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [ratingAnchorEl, setRatingAnchorEl] = useState<HTMLButtonElement | null>(null);
    const { setSearchParams } = useSearchContext();
 
    const formik = useFormik<SearchParam>({
        initialValues: intialValues,
        onSubmit: (values) => {
            setSearchParams(values); 
            navigate('/SearchResultPage');
          },
    });

    const handleDateChange = (item: any) => {
        setDate([item.selection]);
        formik.setFieldValue("checkInDate",`${item.selection.startDate.toLocaleDateString()}`);
        formik.setFieldValue("checkOutDate", `${item.selection.endDate.toLocaleDateString()}`);
    };

    const open = Boolean(anchorEl);
    const openRating = Boolean(ratingAnchorEl);
    const openDate = Boolean(dateAnchorEl);

    const toggleCount = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    }
    
    const toggleDate=  (e: React.MouseEvent<HTMLButtonElement>) => {
        setDateAnchorEl(e.currentTarget);
    }

    const toggleRate= (e: React.MouseEvent<HTMLButtonElement>) => {
        setRatingAnchorEl(e.currentTarget);
    }

  
    return (
        <Container>
             <FormikProvider value={formik} >
                <Form onSubmit={formik.handleSubmit} className={styles.form}>
                    <Grid container spacing={3} alignItems={'center'}>
                        <Grid size={{ xs: 12 ,sm:6, md: 3 }}>  
                            <TextField placeholder="where are you going"
                                name="city"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                variant="standard"
                                fullWidth />
                             
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 3 }}> 
                             <Button
                                variant="contained"
                                onClick={(toggleDate)}
                                endIcon={<DateRangeIcon />}
                                fullWidth
                            >     
                                {formik.values.checkInDate + ' - ' + formik.values.checkOutDate }                               
                            </Button> 
                            <Popover open={openDate} 
                                onClose={()=> setDateAnchorEl(null)}
                                anchorEl={dateAnchorEl} >
                                    <DateRange
                                editableDateInputs={true}
                                onChange={item => handleDateChange(item)}
                                moveRangeOnFirstSelection={false}
                                minDate={new Date()}
                                ranges={[
                                    {
                                      startDate: new Date(date[0].startDate),
                                      endDate: new Date(date[0].endDate),
                                      key: "selection",
                                    },
                                  ]}
                            />
                                {/* }  */}
                            </Popover>    
                        </Grid>


                        <Grid size={{xs: 12,sm:6, md: 3 }}>  
                             <Button
                                // id='numberOfPeople'
                                fullWidth
                                variant="contained"
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => { toggleCount(e) }}
                                endIcon={<PeopleAltIcon/>}
                            >     
                             {formik.values.adults+'Adults'+','+formik.values.children+'Children'+','+formik.values.numberOfRooms+'Rooms'}
                            </Button> 
                         
                            <Popover 
                                // id='numberOfPeople'
                                open={open}
                                onClose={()=> setAnchorEl(null)}
                                anchorEl={anchorEl}  
                              anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}>
                            <Stack direction="column" spacing={3} alignItems={"center"} className={styles.count}>
                                    <CountPeople type="Adults" defaultCount={2} onChange={(count) => formik.setFieldValue('adults', count)} />
                                    <CountPeople type="Children" defaultCount={0} onChange={(count) => formik.setFieldValue('children', count)} />
                                    <CountPeople type="Rooms" defaultCount={1} onChange={(count) => formik.setFieldValue('numberOfRooms', count)} />
                              </Stack>       
                                </Popover>
                        </Grid>

                        <Grid size={{ xs: 12,sm:6, md: 2 }}>  
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {toggleRate(e) }}
                            >     
                                Rating : {formik.values.starRate} stars
                            </Button>
                            <Popover 
                                open={openRating}
                                onClose={()=> setRatingAnchorEl(null)}
                                anchorEl={ratingAnchorEl}  
                              anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}>
                                <Stack direction={'row'} spacing={2} alignItems={'center'} className={styles.rating}>
                                    <label>Rating:</label>
                                    <Rating name="size-large" value={formik.values.starRate} size="large"
                                    onChange={(e,value) => formik.setFieldValue("starRate", value)}/>
                                </Stack>    
                                </Popover>
                           </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 1 }}>  
                            <Button type='submit' variant='contained'
                                fullWidth
                            // endIcon={<SearchIcon/>}
                                >
                                Search</Button>
                        </Grid>
                         
                    </Grid>
                        
                </Form>
            </FormikProvider>
        
        </Container>
    )
}

export default SearchBar;