import NavbarLink from "./NavbarLink/NavbarLink";
import styles from "./NavbarLinks.module.css";

const NavbarLinks = (props) => {
  return (
    <ul
      className={`${styles.list} ${
        props.navbarIsOpened ? styles.list__expanded : ""
      }`}
    >
      <NavbarLink
        listItem="Track Ambulance"
        href="/patient/home"
        closeNavbar={props.closeNavbar}
      />
      <NavbarLink
        listItem="About"
        href="#about"
        closeNavbar={props.closeNavbar}
      />
      <NavbarLink
        listItem="Masterplan"
        href="#masterplan"
        closeNavbar={props.closeNavbar}
      />
      <NavbarLink
        listItem="Contact Us"
        href="#contact"
        closeNavbar={props.closeNavbar}
      />
    </ul>
  );
};

export default NavbarLinks;
