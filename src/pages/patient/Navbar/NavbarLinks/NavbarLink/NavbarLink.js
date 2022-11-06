import { Link } from "react-router-dom";
import styles from "./NavbarLink.module.css";

const NavbarLink = (props) => {
  return (
    <li className={styles.item}>
      <Link to={props.href} className={styles.linkLocation}>
        {props.listItem}
      </Link>
    </li>
  );
};

export default NavbarLink;
