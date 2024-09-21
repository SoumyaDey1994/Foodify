import loggedInUserContext from "../utils/UserContext";
import { useContext } from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const { userInfo } = useContext(loggedInUserContext);
  return (
    <>
      {userInfo && (
        <div className={styles.footer}>
          <p>
            Thank you for choosing us, <strong>{userInfo.name}</strong>.
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
