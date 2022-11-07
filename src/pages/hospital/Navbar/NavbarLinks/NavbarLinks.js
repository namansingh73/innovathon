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
        listItem="Patient Status"
        href="/hospital/status"
        closeNavbar={props.closeNavbar}
      />
      <NavbarLink
        listItem="Track Ambulance"
        href="/hospital/track"
        closeNavbar={props.closeNavbar}
      />
      <NavbarLink
        listItem="Events"
        href="/hospital/events"
        closeNavbar={props.closeNavbar}
      />
    </ul>
  );
};

export default NavbarLinks;
