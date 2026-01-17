import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/"> Fast Recat Pizza Co. </Link>
      <Link to="/menu"> Menu </Link>
      <Link to="/about"> About </Link>

    </header>
  );
}
