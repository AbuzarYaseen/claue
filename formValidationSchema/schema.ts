// src/validationSchema.js
import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  agreeToTerms: Yup.bool().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

// Passing createAccount to the Yup validation schema allows to conditionally validate certain fields based on whether the user has chosen to create an account or not.
export const shippingSchema = (createAccount: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: createAccount
      ? Yup.string()
          .min(6, "Password must be at least 6 characters")
          .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
          )
          .matches(
            /[a-z]/,
            "Password must contain at least one lowercase letter"
          )
          .matches(/[0-9]/, "Password must contain at least one number")
          .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one special character"
          )
          .required("Password is required")
      : Yup.string(),
    confirmPassword: createAccount
      ? Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Required")
      : Yup.string(),
    firstName: Yup.string()
      .min(2, "First Name must be at least 2 characters")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(2, "Last Name must be at least 2 characters")
      .required("Last Name is required"),
    streetAddress: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    company: Yup.string(),
    phoneNumber: Yup.string().required("Phone number is required"),
  });
