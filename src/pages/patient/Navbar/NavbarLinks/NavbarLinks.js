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
        listItem="Events"
        href="/patient/events"
        closeNavbar={props.closeNavbar}
      />
      <NavbarLink
        listItem="Checklist"
        href="/patient/checklist"
        closeNavbar={props.closeNavbar}
      />
    </ul>
  );
};

export default NavbarLinks;
