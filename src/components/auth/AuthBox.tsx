import { useFormik } from "formik";
import IAuthBox from "../../interfaces/components/AuthBox";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { authSchema } from "../../utils/schema";
import { useState } from "react";

const AuthBox = (props: IAuthBox) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: authSchema,
  });

  async function onSubmit() {
    await props.fn(values);
    resetForm();
  }

  return (
    <div className="auth_box">
      <h1>{props.label}</h1>

      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <div className="input_container">
            <MdOutlineEmail className="input_icon" />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>

          {errors.email && touched.email && (
            <p className="error_message">{errors.email}</p>
          )}
        </div>

        <div className="input_box">
          <div className="input_container">
            <MdLockOutline className="input_icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            {showPassword ? (
              <IoMdEye
                className="eye_icon"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <IoMdEyeOff
                className="eye_icon"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {errors.password && touched.password && (
            <p className="error_message">{errors.password}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {props.label}
        </button>
      </form>

      <p onClick={() => props.setShowRegister((p) => !p)}>
        {props.label === "Login"
          ? "Don't have an account ? "
          : "Already have an account ? "}

        {props.label === "Login" ? (
          <span>Register now</span>
        ) : (
          <span>Login now</span>
        )}
      </p>
    </div>
  );
};

export default AuthBox;
