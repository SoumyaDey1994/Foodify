import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { SIGN_IN, SIGN_OUT } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import styles from "../styles/Header.module.css";
import loggedInUserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnName, setBtnName] = useState(SIGN_IN);
  const isAppOnline = useOnlineStatus();
  const { setUserInfo } = useContext(loggedInUserContext);
  // Subscribing to the Store
  const cartItmes = useSelector((store) => store.cart.items);

  const updateBtnName = () => {
    if (btnName === SIGN_IN) {
      getLoggedInUserDetails();
    } else {
      setUserInfo(null);
      setBtnName(SIGN_IN);
    }
  };

  const getLoggedInUserDetails = async () => {
    const USER_API_URL = `https://api.github.com/users/SoumyaDey1994`;
    const data = await fetch(USER_API_URL);
    const json = await data.json();
    setUserInfo(json);
    setBtnName("Welcome " + json.name + "!");
  };

  return (
    <div className={styles.header}>
      <div
        className={
          `${styles.logoContainer} ` +
          (isAppOnline ? styles.appOnline : styles.appOffline)
        }
        data-testid={isAppOnline ? "app-online" : "app-offline"}
      >
        <Link to={"/"}>
          <img src={LOGO_URL} className={styles.logo} alt="app-logo" />
        </Link>
      </div>
      <div className={styles.navContainer}>
        <ul>
          <li key={"home"} data-testid="home">
            <Link to={"/"}>Home</Link>
          </li>
          <li key={"about"} data-testid="about">
            <Link to={"/about"}>About</Link>
          </li>
          <li key={"contact"} data-testid="contact">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li key={"cart"} data-testid="cart">
            <Link to={"/cart"}>Cart ({cartItmes.length} Items)</Link>
          </li>
          <button className={styles.signIn} onClick={() => updateBtnName()}>
            <p>
              <strong>{btnName}</strong>
            </p>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
