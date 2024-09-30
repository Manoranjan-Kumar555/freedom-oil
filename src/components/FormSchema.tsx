import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name can't be more than 20 characters")
    .required("Name is required"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile is required"),

  city: Yup.string()
    .min(3, "City must be at least 3 characters")
    .max(20, "City can't be more than 20 characters")
    .required("City is required"),

  state: Yup.string()
    .required("State is required"),  // Corrected message from "Mobile is required" to "State is required"

  checkbox: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Checkbox is required"),

    // otp: Yup.string()
    // .min(6, "City must be at least 6 Number")
    // .max(6, "City can't be more than 6 Number")
    // .required("City is required"),
});

export const otpFormSchema = Yup.object({
  otp: Yup.string()
    .min(6, "Code must be at least 6 Number")
    .max(6, "Code can't be more than 6 Number")
    .required("Code is required"),
})
