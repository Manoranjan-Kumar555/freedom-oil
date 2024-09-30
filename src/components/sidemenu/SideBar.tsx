import React from "react";
import "../sidemenu/SideBar.scss";
import cancel_btn from "../../assets/images/cancel-btn.png";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  open: boolean;     
  click: () => void;  
}

const SideBar: React.FC<SideBarProps> = ({ open, click }) => {
  const navigate = useNavigate();

 
  function homePageFun() {
    navigate("/");
    click();
  }
  function HowToPatiPageFun() {
    navigate("/participate")
    click();
  }
  function DaliyWinnerPageFun() {
    navigate("/daily-winner")
    click();
  }
  function TermsPageFun() {
    navigate("/terms")
    click();
  }

  return (
    <div>
      <div className={`side-bar ${open ? "collapse" : ""}`}>
        <div className="side-bar-text-cancel">
          <div className="side-bar-text">
            <ul>
              <li onClick={homePageFun}>Home</li> {/* Correctly called the function */}
              <li onClick={HowToPatiPageFun}>How to participate</li>
              <li onClick={DaliyWinnerPageFun}>Daily winner</li>
              <li onClick={TermsPageFun}>Terms & Conditions</li>
            </ul>
          </div>
          <div className="side-bar-cancel">
            <img
              src={cancel_btn}
              onClick={click} 
              alt="Cancel button"
              style={{ cursor: 'pointer' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
