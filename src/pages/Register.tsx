import "../pages/register.scss";
import MainLayout from "../layouts/MainLayout";
import registerImage from "../assets/images/two-logo.png";
import FormikForm from "../components/Formik";

const Register = () => {
  return (
    <div>
      <MainLayout>
        <div className="register-page">
          <div className="register-logo">
            <img src={registerImage} alt="" />
          </div>
          
          <div className="register-heading">
            <p>Enter your details to participate</p>
          </div>
          <FormikForm />
        </div>
      </MainLayout>
    </div>
  );
};

export default Register;
