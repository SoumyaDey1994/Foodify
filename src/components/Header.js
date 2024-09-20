import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { SIGN_IN, SIGN_OUT } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import styles from "../styles/Header.module.css";

const Header = () => {
  let [btnName, setBtnName] = useState(SIGN_IN);
  const isAppOnline = useOnlineStatus();

  const updateBtnName = () => {
    btnName === SIGN_IN ? setBtnName(SIGN_OUT) : setBtnName(SIGN_IN);
  };

  return (
    <div className={styles.header}>
      <div
        className={
          `${styles.logoContainer} ` +
          (isAppOnline ? styles.appOnline : styles.appOffline)
        }
      >
        <Link to={"/"}>
          <img src={LOGO_URL} className={styles.logo} />
        </Link>
      </div>
      <div className={styles.navContainer}>
        <ul>
          <li key={"home"}>
            <Link to={"/"}>Home</Link>
          </li>
          <li key={"about"}>
            <Link to={"/about"}>About</Link>
          </li>
          <li key={"contact"}>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li key={"cart"}>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button className={styles.signIn} onClick={() => updateBtnName()}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
