import { Box } from "@mui/material";
import style from "../admin.module.css";
import RoomsTable from "./RoomsTable";

const Rooms: React.FC = () => {
  return (
    <Box sx={{ hieght: "100vh" }}>
      <Box className={style.container}>
        <RoomsTable />
      </Box>
    </Box>
  );
};

export default Rooms;
