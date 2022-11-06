import styles from "./Logo.module.css";
import logo from "../../../../utils/Images/logo.jpg";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <span>
        <img src={logo} alt="logo" className={styles.image} />
      </span>
      <h3 className={styles.logoHeading}>
        Saha<span className={styles.blueHeading}>yak</span>
      </h3>
    </div>
  );
};

export default Logo;
