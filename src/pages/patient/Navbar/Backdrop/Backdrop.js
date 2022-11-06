import styles from './Backdrop.module.css';

const Backdrop = (props) => {
  return (
    <div
      className={`${styles.backdrop} ${
        props.navbarIsOpened ? styles.backdrop__expanded : ''
      }`}
    />
  );
};

export default Backdrop;
