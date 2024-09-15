import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { SIGN_IN, SIGN_OUT } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState(SIGN_IN);

  const updateBtnName = () => {
    btnName === SIGN_IN ? setBtnName(SIGN_OUT) : setBtnName(SIGN_IN);
  };

  return (
    <div className="header">
      <div className="logoContainer">
        <Link to={"/"}>
          <img src={LOGO_URL} className="logo" />
        </Link>
      </div>
      <div className="nav-container">
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
          <button className="signin" onClick={() => updateBtnName()}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
