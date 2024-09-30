import "../pages/OTPpage.scss";
import MainLayout from "../layouts/MainLayout";
import opt_img from "../assets/images/gold-logo.png";
import { useFormik } from "formik";
import { otpFormSchema } from "../components/FormSchema";
import { ROUTES } from "../lib/consts";
import { useNavigate } from "react-router-dom";


const OTPpage = () => {

    const navigate = useNavigate();

  const formInitialValue = {
    otp: "",
  };

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: formInitialValue,
    validationSchema: otpFormSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log("OTP: ", values.otp);
      navigate(ROUTES.THANKYOU);
    },
  });

  return (
    <div>
      <MainLayout>
        <div className="otp-container">
          <div className="otp-logo-container">
            <img src={opt_img} alt="" />
          </div>
          
          <div className="otp-form-container">
            <div className="form-container">
              <div className="heading">
                <p>Enter the OTP</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    className="input-field"
                    type="text"
                    name="otp"
                    onChange={handleChange}
                    value={values.otp}
                    placeholder="Enter the OTP"
                  />
                </div>

                {errors.otp && touched.otp && (
                  <p className="error">{errors.otp}</p>
                )}

                <div className="resend-container">
                  <p>Resend OTP</p>
                </div>

                <div className="btn-field">
                  <input
                    style={{ backgroundColor: "#017642" }}
                    type="submit"
                    value="Submit"
                    // onClick={() => navigate(ROUTES.THANKYOU)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default OTPpage;
