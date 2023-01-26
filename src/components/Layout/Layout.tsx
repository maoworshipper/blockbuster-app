import { Link, Outlet } from "react-router-dom";
import { CartButton, CartIcon, NavBar } from "../UI";

export const Layout = () => {
  return (
    <>
      <NavBar>
        <h1>Blockbuster App</h1>
        <Link to="/">Home</Link>
        <CartButton to="/cart" title="Ver carrito">
          <CartIcon />
        </CartButton>
      </NavBar>
      <Outlet />
    </>
  );
};
