import "../pages/Thankyou.scss";
import MainLayout from "../layouts/MainLayout";

const Thankyou = () => {
  return (
    <div>
      <MainLayout>
        <div className="thankyou-container">
          <div className="heading">
            <h1>Congratulations!</h1>
          </div>
          <div className="sub-heading">
            You have participated successfully.
            <div>All the best!</div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Thankyou;
