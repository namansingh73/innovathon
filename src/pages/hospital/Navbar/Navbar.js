import { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo/Logo";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import RegisterButton from "./RegisterButton/RegisterButton";
import Hamburger from "./Hamburger/Hamburger";
import Backdrop from "./Backdrop/Backdrop";

const Navbar = () => {
  const [navbarIsOpened, setNavbarIsOpened] = useState(false);

  const toggleNavbar = () => {
    setNavbarIsOpened((navbarIsOpened) => !navbarIsOpened);
  };

  const closeNavbar = () => {
    setNavbarIsOpened(false);
  };

  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavbarLinks navbarIsOpened={navbarIsOpened} closeNavbar={closeNavbar} />
      <RegisterButton />
      <Hamburger navbarIsOpened={navbarIsOpened} toggleNavbar={toggleNavbar} />
      <Backdrop navbarIsOpened={navbarIsOpened} />
    </nav>
  );
};

export default Navbar;
