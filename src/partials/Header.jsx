import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md flex items-center justify-between bg-gray-200/70 p-2 z-50">
      <img src={logo} alt="Logo" className="w-14 md:w-20" />

      <Link
        to="/login"
        className="bg-primary hover:bg-sky-700 rounded-full  px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Entrar
      </Link>
    </header>
  );
}
