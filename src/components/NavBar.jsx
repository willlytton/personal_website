import { Link } from "react-router-dom";
import Connect from "./Connect";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-end py-8 px-8">
        <div className="flex gap-3">
          <Link
            className="text-black text-lg font-extrabold focus:outline-none focus:border-b-2 focus:border-orange-400 transition-transform transform hover:scale-105"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-black text-lg font-extrabold focus:outline-none focus:border-b-2 focus:border-orange-400 transition-transform transform hover:scale-105"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-black text-lg font-extrabold focus:outline-none focus:border-b-2 focus:border-orange-400 transition-transform transform hover:scale-105"
            to="/art"
          >
            Art
          </Link>
        </div>
        <Connect />
      </nav>
    </>
  );
}
