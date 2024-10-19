import * as yup from "yup";

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

export { authSchema };
