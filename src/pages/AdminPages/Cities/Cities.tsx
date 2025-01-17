import { Box, Typography } from "@mui/material";
import Navbar from '../components/Navbar';
import style from '../admin.module.css'
import CityTable from "./CityTable";
import Footer from "../../../components/footer";


const Rooms: React.FC = () => {
    return (
        <Box>
           <Navbar />
           <Box className={style.container}>
                <Typography variant="h4" component={'h2'}>Cities</Typography>
                <CityTable/>
            </Box>     
           <Footer/> 
        </Box>
    )
}

export default Rooms;