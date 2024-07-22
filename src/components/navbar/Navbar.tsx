import { logo } from "../../config"
import { NavbarLogo, NavbarTitle, NavbarWrapper } from "./Navbar.style"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLogo src={logo} alt="Logo" />
      <NavbarTitle>Concierge</NavbarTitle>
    </NavbarWrapper>
  )
}

export default Navbar