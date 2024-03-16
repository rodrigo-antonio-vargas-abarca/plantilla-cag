import { ImagePath } from "@data/tags"
import { NavLinkList } from "@data/layout"
import { NavLink } from "reactstrap"

const NavLinks = () => {
  return (
    <>
      {NavLinkList &&
        NavLinkList.map((item, index) => (
          <NavLink key={index} href={item.path} target="_blank">
            <div>
              <img className={`img-fluid ${item.class ? item.class : ""} `} src={`${ImagePath}/customizer/${item.image}`} alt="icons" />
            </div>
            <span>{item.name}</span>
          </NavLink>
        ))}
    </>
  )
}

export default NavLinks