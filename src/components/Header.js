const Header = () => {
    return (
      <div className="header">
        <div className="logoContainer">
          <img
            src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
            className="logo"
          />
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
