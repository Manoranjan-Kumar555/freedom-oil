import React, { ReactNode, useState } from "react"; // Import useState
import "../layouts/MainLayout.scss"; // Make sure this path is correct
import Header from "../components/Header/Header";
import SideBar from "../components/sidemenu/SideBar";

interface SideBarProps {
  children: ReactNode;
}

const MainLayout: React.FC<SideBarProps> = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="background">
        <Header click={handleClick} />
        <SideBar open={open} click={handleClick} />
        <div className="foreground">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
