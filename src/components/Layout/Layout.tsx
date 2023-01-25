import { Link, Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar>
        <h1>Blockbuster App</h1>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </NavBar>
      <Outlet />
    </>
  );
};
