import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/"> Fast Recat Pizza Co. </Link>
      <Link to="/menu"> Menu </Link>
      <Link to="/about"> About </Link>

      <SearchOrder />
    </header>
  );
}
