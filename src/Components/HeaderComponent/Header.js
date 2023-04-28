import NavItems from "./NavItems";
import Cart from "./Cart";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jJEVkJJJ5OecY2ouEpPvXbsCaXPxDh8_uQ&usqp=CAU"
        ></img>
      </a>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="left">
        <div className="logo-container">
          <Title />
        </div>
      </div>
      <div className="right">
        <div className="cart-container">
          <Cart />
        </div>
        <div className="nav-items-container">
          <NavItems />
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
