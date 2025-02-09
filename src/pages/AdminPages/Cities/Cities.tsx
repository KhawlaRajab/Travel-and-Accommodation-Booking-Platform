import { Box } from "@mui/material";
import style from "../admin.module.css";
import CityTable from "./CityTable";

const Rooms: React.FC = () => {
  return (
    <Box>
      <Box className={style.container}>
        <CityTable />
      </Box>
    </Box>
  );
};

export default Rooms;
