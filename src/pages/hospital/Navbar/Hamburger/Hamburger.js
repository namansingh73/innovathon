import styles from './Hamburger.module.css';

const Hamburger = (props) => {
  return (
    <div
      onClick={props.toggleNavbar}
      className={`${styles.hamburgerContainer} ${
        props.navbarIsOpened ? styles.hamburgerContainer__expandedBg : ''
      }`}
    >
      <div
        className={`${styles.hamburger} ${
          props.navbarIsOpened ? styles.hamburger__opened : ''
        }`}
      />
    </div>
  );
};

export default Hamburger;
