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
        listItem="Update Status"
        href="/operator/status"
        closeNavbar={props.closeNavbar}
      />
      <NavbarLink
        listItem="Track Patient"
        href="/operator/track"
        closeNavbar={props.closeNavbar}
      />
    </ul>
  );
};

export default NavbarLinks;
