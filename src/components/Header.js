import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { SIGN_IN, SIGN_OUT } from "../utils/constants";

const Header = () => {
  let [btnName, setBtnName] = useState(SIGN_IN);

  const updateBtnName = () => {
    btnName === SIGN_IN ? setBtnName(SIGN_OUT) : setBtnName(SIGN_IN);
  };

  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li key={"home"}>Home</li>
          <li key={"about"}>About</li>
          <li key={"cart"}>Cart</li>
          <button className="signin" onClick={() => updateBtnName()}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
