import { Box } from "@mui/material";
import Navbar from '../components/Navbar';
import style from '../admin.module.css'
import RoomsTable from "./RoomsTable";
import Footer from "../../../components/footer";


const Rooms: React.FC = () => {
    return (
        <Box sx={{hieght:'100vh'}}>
           <Navbar />
           <Box className={style.container} >
                <RoomsTable/>
            </Box>     
            <Footer/>
        </Box>
    )
}

export default Rooms;