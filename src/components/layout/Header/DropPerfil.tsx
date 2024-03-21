import {Href, ImagePath, Inbox, LogOut, Mode, MyProfile, Setting} from "../../../data/tags";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Media } from "reactstrap";
import Cookies from "js-cookie";
import {DarkMood} from "@layouts/Header/DarkMood";
import MaximizeScreen from "@layouts/Header/Maximize";

export const DropPerfil = () => {
  const router = useRouter();
  
  const LogOutUser = () => {
    Cookies.remove("token");
    router.push("/auth/login");
  };

  return (
    <li className="profile-nav onhover-dropdown">
      <Media className="profile-media">
        <Media body className="d-xl-block d-none box-col-none">
          <div className="d-flex align-items-center gap-2">
            <span className="text-nowrap">Usuario </span><i className="middle fa fa-angle-down"> </i>
          </div>
          <p className="mb-0 font-roboto">Rol</p>
        </Media>
      </Media>
      <ul className="profile-dropdown onhover-show-div">
        <DarkMood/>
        <MaximizeScreen/>
        <li onClick={LogOutUser}><Link className="btn btn-pill btn-outline-primary btn-sm" href={Href}>{LogOut}</Link>
        </li>
      </ul>
    </li>
  );
};
  