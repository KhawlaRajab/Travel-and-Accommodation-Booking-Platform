import { Box, Typography } from "@mui/material";
import Navbar from '../components/Navbar';
import style from '../admin.module.css'
import HotelsTable from "./HotelsTable";


const Rooms: React.FC = () => {
    return (
        <Box>
           <Navbar />
           <Box className={style.container}>
                <Typography variant="h4" component={'h2'}>Hotels</Typography>
                <HotelsTable/> 
            </Box>     
        </Box>
    )
}

export default Rooms;