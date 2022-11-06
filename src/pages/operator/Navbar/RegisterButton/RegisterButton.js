import Button from "../../../../utils/Button/Button";
import styles from "./RegisterButton.module.css";

const RegisterButton = () => {
  return (
    <Button
      href="#register"
      DomElement="a"
      rounded
      color="blue"
      className={styles.btn}
    >
      Register Now
    </Button>
  );
};

export default RegisterButton;
