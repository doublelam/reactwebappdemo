import React, {PropTypes} from 'react';
import styles from "./Error.less";

function Error({message = "error"}) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>{message}</h1>
      <p className={styles.imgWrapper}>
        <span className={styles.img}></span>
      </p>
    </div>
  );
}

Error.propTypes = {};

export default Error;
