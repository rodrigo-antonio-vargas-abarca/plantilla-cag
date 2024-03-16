import { ImagePath } from "@data/tags";
import { useAppDispatch, useAppSelector } from "@hooks/common/State";
import { handleResponsiveToggle, setToggleSidebar } from "@state/common/layout/LayoutSlice";
import Link from "next/link";
import { Grid } from "react-feather";

export const LogoWrapper = () => {
  const dispatch = useAppDispatch();
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);


  return (
    <>
      <div className="logo-wrapper">
        <Link href={`/${i18LangStatus}/sample_page`}>
          <img className="img-fluid" src={`${ImagePath}/logo/logo.png`} alt="" />
        </Link>
        <div className="back-btn" onClick={()=>dispatch(handleResponsiveToggle())}>
          <i className="fa fa-angle-left" > </i>
        </div>
        <div className="toggle-sidebar">
          <Grid className="status_toggle middle sidebar-toggle" onClick={()=>dispatch(setToggleSidebar(!toggleSidebar))} />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link href={`/${i18LangStatus}/sample_page`}>
          <img className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} alt="" />
        </Link>
      </div>
    </>
  );
};
