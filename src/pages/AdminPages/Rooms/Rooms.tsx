import { Box, Typography } from "@mui/material";
import Navbar from '../components/Navbar';
import style from '../admin.module.css'
import RoomsTable from "./RoomsTable";


const Rooms: React.FC = () => {
    return (
        <Box>
           <Navbar />
           <Box className={style.container}>
                <Typography variant="h4" component={'h2'}>Rooms</Typography>
                <RoomsTable/>
            </Box>     
        </Box>
    )
}

export default Rooms;