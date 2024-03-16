import { MobileView } from "./MobileView";
import { Profile } from "./Profile";
import { Row } from "reactstrap";
import { useAppSelector } from "@hooks/common/State";
import { useEffect } from "react";

const Header = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        document.getElementById("page-headers")?.classList.add("close_icon");
        document.getElementById("sidebar-wrappers")?.classList.add("close_icon");
      } else {
        document.getElementById("page-headers")?.classList.remove("close_icon");
        document.getElementById("sidebar-wrappers")?.classList.remove("close_icon");
      }
    });
  }, []);

  return (
    <div className={`page-header ${toggleSidebar ? "close_icon" : ""}`} id="page-headers">
      <Row className="header-wrapper m-0">
        <MobileView />
        <Profile />
      </Row>
    </div>
  );
};

export default Header;
