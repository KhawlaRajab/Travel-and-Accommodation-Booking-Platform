import { Form, FormikProvider, useFormik } from "formik";
import { Button, Divider, Stack, Typography } from "@mui/material";
import TextInput from "../../../components/Field/TextField";
import { RoomInitialValues } from "../formSchemaAndConstants";
import { Room } from "../type";

interface FormProps {
  operation: "add" | "update";
  room: Room | null;
  onClose: () => void;
  Delete: () => void;
  update: (room: Room) => void;
  add: (room: Room) => void;
}

const RoomForm: React.FC<FormProps> = ({
  operation,
  room,
  onClose,
  Delete,
  update,
  add,
}) => {
  const formik = useFormik<Room>({
    initialValues: room || RoomInitialValues,
    onSubmit: (values) => {
      if (operation === "add") add({ ...RoomInitialValues, ...values });
      else if (room?.roomId) {
        update({ ...room, ...values });
      }
      onClose();
    },
  });

  const handleDelete = async () => {
    if (room?.roomId) {
      Delete();
    }
  };
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <Stack spacing={{ xs: 2 }} direction="column">
          <Typography component={"h5"}> Room Form </Typography>
          <Divider />

          <TextInput name="id" placeholder="id" />

          <TextInput name="name" placeholder="name" />

          <TextInput name="description" placeholder="description" />

          <TextInput name="hotelType" placeholder="hotelType" />

          <TextInput name="starRating" placeholder="starRating" />
        </Stack>
        <Stack direction={"row"} spacing={1} paddingTop={2}>
          <Button type="submit" variant="contained">
            {operation === "update" ? "Update" : "add"}
          </Button>
          {operation === "update" && (
            <Button
              type="button"
              variant="contained"
              onClick={handleDelete}
              color="error"
            >
              delete
            </Button>
          )}
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default RoomForm;
