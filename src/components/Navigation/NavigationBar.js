import { useSelector } from "react-redux";
import Cart from "./cart/cart";

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <div />
      <Cart />
    </nav>
  );
};

export default NavigationBar;
