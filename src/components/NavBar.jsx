import { Link } from "react-router-dom";
import Connect from "./Connect";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between items-end pb-24">
        <div className="">
          <Link className="bg-black text-white" to="/about">
            About
          </Link>
          <Link className="bg-black text-white" to="/projects">
            Projects
          </Link>
          <Link className="bg-black text-white" to="/paintings">
            Paintings
          </Link>
          <Link className="bg-black text-white rounded-br-3xl" to="/contact">
            Contact
          </Link>
        </div>
        <Connect />
      </div>
    </>
  );
}
