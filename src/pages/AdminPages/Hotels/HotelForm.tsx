import { Form, FormikProvider, useFormik } from "formik";
import { Hotel } from "../type";
import { HotelInitialValues } from "../formSchemaAndConstants";
import { Button, Divider, Stack, Typography } from "@mui/material";
import TextInput from "../../../components/Field/TextField";

interface FormProps {
  operation: "add" | "update";
  hotel: Hotel | null;
  onClose: () => void;
  Delete: () => void;
  update: (hotel: Hotel) => void;
  add: (hotel: Hotel) => void;
}

const HotelForm: React.FC<FormProps> = ({
  operation,
  hotel,
  onClose,
  Delete,
  update,
  add,
}) => {
  const formik = useFormik<Hotel>({
    initialValues: hotel || HotelInitialValues,
    onSubmit: (values) => {
      if (operation === "add") add({ ...HotelInitialValues, ...values });
      else if (hotel?.id) {
        update({ ...hotel, ...values });
      }
      onClose();
    },
  });

  const handleDelete = async () => {
    if (hotel?.id) {
      Delete();
    }
  };
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <Stack spacing={{ xs: 2 }} direction="column">
          <Typography component={"h5"}> hotel Form </Typography>
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

export default HotelForm;
