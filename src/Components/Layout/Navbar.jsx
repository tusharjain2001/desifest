import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-black text-white flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/artist">Artist</Link>
      <Link to="/community">Community</Link>
      <Link to="/concerts">Concerts</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
}
