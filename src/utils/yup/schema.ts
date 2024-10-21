import * as yup from "yup";
import { IAllInputValues } from "../../interfaces/components/Input";

const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

const authSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .matches(emailRegex, "Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      passwordRegEx,
      "Password must contain at least one uppercase, one lowercase and one number."
    )
    .required("Password is required"),
});

const generatorSchema: yup.ObjectSchema<IAllInputValues> = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  location: yup.string().required("Location is required"),
  about: yup.string().required("About is required"),
  avatar: yup.mixed(),
  links: yup.array().of(
    yup.object().shape({
      label: yup.string().required("Link label is required"),
      url: yup.string().required("Link url is required"),
    })
  ),
});

export { authSchema, generatorSchema };
