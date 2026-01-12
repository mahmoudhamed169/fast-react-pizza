import { Link, Outlet } from "react-router-dom";
import Header from "./header";
import CartOverview from "../features/cart/CartOverview";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Link to={"/"}>Open cart &rrar;</Link> */}
      <CartOverview />
    </div>
  );
}
