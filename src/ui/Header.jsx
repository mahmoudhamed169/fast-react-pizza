import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="font-pizza bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 flex justify-between items-center">
      <Link to="/" className="tracking-widest">
        {" "}
        Fast React Pizza Co.{" "}
      </Link>
      {/* <Link to="/menu"> Menu </Link>
      <Link to="/about"> About </Link> */}

      <SearchOrder />
      <Username />
    </header>
  );
}
