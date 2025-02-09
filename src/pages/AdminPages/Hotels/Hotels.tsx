import { Box } from "@mui/material";
import style from "../admin.module.css";
import HotelsTable from "./HotelsTable";

const Rooms: React.FC = () => {
  return (
    <Box>
      <Box className={style.container}>
        <HotelsTable />
      </Box>
    </Box>
  );
};

export default Rooms;
