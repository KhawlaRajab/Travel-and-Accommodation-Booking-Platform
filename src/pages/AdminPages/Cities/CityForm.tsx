import { Form, FormikProvider, useFormik } from "formik";
import { City } from "../type";
import {
  CityInitialValues,
  cityValidationSchema,
} from "../formSchemaAndConstants";
import { Divider, Stack, Typography } from "@mui/material";
import TextInput from "../../../components/Field/TextField";
import Button from "../../../components/Button";

interface FormProps {
  operation: "add" | "update";
  city: City | null;
  onClose: () => void;
  Delete: () => void;
  update: (city: City) => void;
  add: (city: City) => void;
}

const CityForm: React.FC<FormProps> = ({
  operation,
  city,
  onClose,
  Delete,
  update,
  add,
}) => {
  const formik = useFormik<City>({
    initialValues: city || CityInitialValues,
    validationSchema: cityValidationSchema,
    onSubmit: (values) => {
      if (operation === "add") add({ ...CityInitialValues, ...values });
      else if (city?.id) {
        update({ ...city, ...values });
      }
      onClose();
    },
  });

  const handleDelete = async () => {
    if (city?.id) {
      Delete();
    }
  };
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <Stack spacing={{ xs: 2 }} direction="column">
          <Typography component={"h5"}> City Form </Typography>
          <Divider />

          <TextInput
            name="id"
            placeholder="id"
            disabled={operation === "update"}
          />

          <TextInput name="name" placeholder="name" />
          <TextInput name="description" placeholder="description" />
        </Stack>
        <Stack direction={"row"} spacing={1} paddingTop={2}>
          <Button type="submit" variant="contained">
            {operation === "update" ? "update" : "add"}
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

export default CityForm;
