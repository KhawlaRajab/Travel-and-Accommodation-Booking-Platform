import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import { ConfirmationDetail } from "./type";
import { getBookingDetails } from "./Api/Api";

const bookingId = 1;
const ConfirmationDetails: React.FC = () => {
  const { data, isLoading, error } = useQuery<ConfirmationDetail, Error>(
    ["getBookingDetails", bookingId],
    () => getBookingDetails(bookingId),
    {
      enabled: !!bookingId,
    }
  );
  return (
    <Box>
      <Container sx={{ marginTop: 12, textAlign: "center" }}>
        <Typography variant="h5" paddingBottom={3}>
          Confirmation Details
        </Typography>
        {error && <Typography variant="body1">{error?.message}</Typography>}
        {isLoading && <CircularProgress />}
        <TableContainer
          component={Paper}
          sx={{ width: "600px", marginX: "auto" }}
        >
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  customerName
                </TableCell>
                <TableCell>{data?.customerName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  hotelName
                </TableCell>
                <TableCell>{data?.hotelName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  roomType
                </TableCell>
                <TableCell>{data?.roomType}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  bookingDateTime
                </TableCell>
                <TableCell>{data?.bookingDateTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  roomNumber
                </TableCell>
                <TableCell>{data?.roomNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  totalCost
                </TableCell>
                <TableCell>{data?.totalCost}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  bookingStatus
                </TableCell>
                <TableCell>{data?.bookingStatus}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  confirmationNumber
                </TableCell>
                <TableCell>{data?.confirmationNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  paymentMethod
                </TableCell>
                <TableCell>{data?.paymentMethod}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default ConfirmationDetails;
