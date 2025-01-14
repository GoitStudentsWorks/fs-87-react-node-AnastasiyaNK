import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { apiUserRegister } from "../../redux/userSlice";
import {
  StyledRegisterContainer,
  StyledRegisterForm,
} from "./RegisterForm.styled";
import { StyledMainContainer } from "styled";
import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";
import { ReactComponent as IconGoogle } from "../../assets/icons/icons8-google.svg";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleRepeatPassword, setVisibleRepeatPassword] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      console.log(token);
      navigate("/home");
    }
  }, [navigate]);
  const signinSchema = yup.object().shape(
    {
      email: yup
        .string()
        .required("Here must be your e-mail")
        .email("Invalid email"),

      password: yup
        .string()
        .min(8, "Invalid password (8-64 characters)")
        .max(64, "Invalid password (8-64 characters)")
        .when(["repeatPassword"], {
          is: (repeatPassword) => repeatPassword,
          then: (schema) => schema.required("You must enter the password"),
        }),
      repeatPassword: yup
        .string()
        .min(8, "Invalid password (8-64 characters)")
        .max(64, "Invalid password (8-64 characters)")
        .oneOf([yup.ref("password")], "Passwords don't match"),
    },
    [["password"], ["repeatPassword"]]
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: signinSchema,
    onSubmit: (values) => {
      if (values.password === values.repeatPassword) {
        const formData = { email: values.email, password: values.password };
        dispatch(apiUserRegister(formData))
          .unwrap()
          .then(() => {
            navigate("/signin");
          });
      }
    },
  });

  return (
    <StyledMainContainer>
      <StyledRegisterContainer>
        <StyledRegisterForm onSubmit={formik.handleSubmit}>
          <h2 className="title">Sign Up</h2>
          <label className="label">
            <span className="label-text">Enter your email</span>
          </label>

          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}

          <label className="label">
            <span className="label-text">Enter your password</span>
          </label>
          <div className="icon-wrapper">
            <input
              className="input"
              name="password"
              type={visiblePassword ? "text" : "password"}
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {visiblePassword ? (
              <IconClosedEye
                onClick={() => setVisiblePassword(false)}
                className="eye-icon"
              />
            ) : (
              <IconOpenedEye
                onClick={() => setVisiblePassword(true)}
                className="eye-icon"
              />
            )}
            {formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>

          <label className="label">
            <span className="label-text">Repeat password</span>
          </label>
          <div className="icon-wrapper">
            <input
              className="input"
              name="repeatPassword"
              type={visibleRepeatPassword ? "text" : "password"}
              placeholder="Repeat password"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
            />
            {visibleRepeatPassword ? (
              <IconClosedEye
                onClick={() => setVisibleRepeatPassword(false)}
                className="eye-icon"
              />
            ) : (
              <IconOpenedEye
                onClick={() => setVisibleRepeatPassword(true)}
                className="eye-icon"
              />
            )}
          </div>
          {formik.errors.repeatPassword && (
            <div className="error">{formik.errors.repeatPassword}</div>
          )}

          <button className="button" type="submit">
            Sign Up
          </button>
          <button className="button" type="submit">
            <div className="google-wrapper">
              <IconGoogle className="google-icon" />
              <a
                className="text-google"
                href="https://water-tracker-backend-0wax.onrender.com/api/user/google"
              >
                Sign in wiht Google
              </a>
            </div>
          </button>
          {/* <a
            className="button"
            href="https://water-tracker-backend-0wax.onrender.com/api/user/google"
          >
            Google Auth
          </a> */}

          <Link to="/signin" className="link">
            Sign In
          </Link>
        </StyledRegisterForm>
      </StyledRegisterContainer>
    </StyledMainContainer>
  );
};

export default RegisterForm;
