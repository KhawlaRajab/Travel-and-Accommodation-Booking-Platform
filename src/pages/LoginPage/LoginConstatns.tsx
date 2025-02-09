import { loginPayload } from "./loginType";
import * as Yup from "yup";

export const intialValues: loginPayload = {
  userName: "",
  password: "",
};

export const validationSchema = Yup.object({
  userName: Yup.string()
    .min(3, "Your name must be at least 3 charchters")
    .required("this feild is requierd"),
  password: Yup.string()
    .min(3, "Your password must be at least 3 charchters")
    .required("this feild is requierd"),
});
