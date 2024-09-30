// import "../components/Formik.css";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
import "../components/Formik.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/consts";

const FormikForm = () => {
  const navigate = useNavigate();
  const formInitialValue = {
    name: "",
    mobile: "",
    city: "",
    state: "",
    pincode: "", // Added pincode field
    checkbox: false,
  };

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: formInitialValue,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log("Name: ", values.name);
      console.log("Mobile: ", values.mobile);
      console.log("City: ", values.city);
      console.log("State: ", values.state);
      console.log("Pincode: ", values.pincode); // Added log for pincode
      console.log("Terms Accepted: ", values.checkbox);
      navigate(ROUTES.OTPPAGE);

    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          {/* <div style={{ color: "red" }}>{errors.name}</div> */}
        </div>

        <div className="form-container">
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="mobile" className="styled-label">
                Mobile
              </label>
            </div>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                name="mobile"
                onChange={handleChange}
                value={values.mobile}
                placeholder="Enter Your Mobile Number"
              />
              <p><span style={{color:"red"}}>*</span> Enter 10 digit mobile number</p>
            </div>
            
          </div>
          {/* <div style={{ color: "red" }}>{errors.mobile}</div> */}
        </div>

        <div className="form-container">
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="city" className="styled-label">
                City
              </label>
            </div>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                name="city"
                onChange={handleChange}
                value={values.city}
                placeholder="Enter Your City"
              />
            </div>
          </div>
          {/* <div style={{ color: "red" }}>{errors.city}</div> */}
        </div>

        <div className="form-container">
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="state" className="styled-label">
                State
              </label>
            </div>
            <div className="input-container">
              <select
                name="state"
                onChange={handleChange}
                value={values.state}
                className="input-field"
              >
                <option value="">Select State</option>
                <option value="Telangana">Telangana</option>
                <option value="Orissa">Orissa</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Chhittisgarh">Chhittisgarh</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
            </div>
          </div>
          {/* <div style={{ color: "red" }}>{errors.state}</div> */}
        </div>

        <div className="form-container">
          <div className="label-input-container">
            <div className="label-container">
              <label htmlFor="pincode"><div>PIN</div><div>Code</div></label>
            </div>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                name="pincode"
                onChange={handleChange}
                value={values.pincode}
                placeholder="Enter Your Pincode"
              />
            </div>
          </div>
          {/* <div style={{ color: "red" }}>{errors.pincode}</div> */}
        </div>

        <div className="checkbox-field">
          <div className="label-input-container">
            <label>
              <input
                type="checkbox"
                name="checkbox"
                onChange={handleChange}
                checked={values.checkbox}
              />
              I agree to the{" "}
              <NavLink className="term_constion" to={"/terms"}>
                Terms & Conditions
              </NavLink>
            </label>
          </div>
          {/* <div style={{ color: "red" }}>{errors.checkbox}</div> */}
        </div>

        {errors.name && touched.name && <p className="error">{errors.name}</p>}
        {!errors.name && errors.mobile && touched.mobile && (
          <p className="error">{errors.mobile}</p>
        )}

        {!errors.name && !errors.mobile && errors.city && touched.city && (
          <p className="error">{errors.city}</p>
        )}
        {!errors.name &&
          !errors.mobile &&
          !errors.city &&
          errors.state &&
          touched.state && <p className="error">{errors.state}</p>}

        {!errors.name &&
          !errors.mobile &&
          !errors.city &&
          !errors.state &&
          errors.pincode &&
          touched.pincode && <p className="error">{errors.pincode}</p>}

        {!errors.name &&
          !errors.mobile &&
          !errors.city &&
          !errors.state &&
          !errors.pincode &&
          errors.checkbox &&
          touched.checkbox && <p className="error">{errors.checkbox}</p>}

        <div className="btn-field">
          <input
            style={{ backgroundColor: "#017642" }}
            type="submit"
            value="Click to get OTP"
            // onClick={() => navigate(ROUTES.OTPPAGE)}
          />
        </div>
      </form>
    </div>
  );
};

export default FormikForm;
