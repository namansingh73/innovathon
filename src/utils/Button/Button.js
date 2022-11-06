// import Image from "next/future/image";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import styles from "./Button.module.css";

const Button = ({
  color,
  white,
  big,
  fullWidth,
  rounded,
  className,
  loading,
  children,
  lighter,
  DomElement,
  ...otherProps
}) => {
  const style = {};

  if (color) {
    style["--current-color"] = `var(--color-${color})`;
    style["--current-color-lighter"] = `var(--color-${color}-lighter)`;
    style["--current-color-darker"] = `var(--color-${color}-darker)`;
  }

  let classNameAct = styles.button;
  if (white) {
    classNameAct += " " + styles.buttonWhite;
  }
  if (big) {
    classNameAct += " " + styles.buttonBig;
  }
  if (fullWidth) {
    classNameAct += " " + styles.buttonFullWidth;
  }
  if (rounded) {
    classNameAct += " " + styles.rounded;
  }
  if (className) {
    classNameAct += " " + className;
  }
  if (lighter) {
    style["--current-color"] = `var(--color-${color}-light)`;
  }

  DomElement = DomElement || "button";

  return (
    <DomElement className={classNameAct} style={style} {...otherProps}>
      {loading && (
        <Fragment>
          {/* <Image
            src='/loading.svg'
            className={styles.loadingIcon}
            width={18}
            height={'auto'}
            alt='loading'
          />{' '} */}
          Loading
        </Fragment>
      )}
      {!loading && children}
    </DomElement>
  );
};

export default Button;
