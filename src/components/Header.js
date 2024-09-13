import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li key={"home"}>Home</li>
          <li key={"about"}>About</li>
          <li key={"signin"}>Sign In</li>
          <li key={"cart"}>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
