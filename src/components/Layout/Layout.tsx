import { Link, Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <hr/>
      <Outlet />
    </>
  );
};
