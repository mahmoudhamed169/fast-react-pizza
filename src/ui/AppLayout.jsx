import { Link, Outlet, useNavigation } from "react-router-dom";
import Header from "./header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Link to={"/"}>Open cart &rrar;</Link> */}
      <CartOverview />
    </div>
  );
}
