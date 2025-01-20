import { Box} from "@mui/material";
import Navbar from '../components/Navbar';
import style from '../admin.module.css'
import HotelsTable from "./HotelsTable";
import Footer from "../../../components/footer";


const Rooms: React.FC = () => {
    return (
        <Box>
           <Navbar />
           <Box className={style.container} height={'75vh'}>
                <HotelsTable/> 
            </Box>   
            <Footer/>
        </Box>
    )
}

export default Rooms;