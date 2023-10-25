import { Link } from "react-router-dom";
import constData from "../constData";
import Connect from "./Connect";

export default function LandingPage() {
  return (
    <>
      <div className="flex h-screen py-16 px-8 justify-center">
        <div className="">
          <div className="text-2xl font-bold">
            <h1 className="flex h-16 text-4xl text-orange-400 font-bold gap-3">
              Hi, I'm {constData.aboutMe.firstName}!{" "}
              <span role="img" aria-label="Emoji">
                🤙🏾
              </span>
            </h1>
          </div>
          <div className="pb-10 max-w-2xl">
            <p className="font-semibold">{constData.aboutMe.bio}</p>
          </div>
          <div>{constData.email}</div>
          <div className="flex flex-col gap-4">
            <Link
              to="/about"
              className="bg-orange-500 h-10 w-32 rounded-full text-white flex justify-center items-center gap-1 hover:bg-orange-600"
            >
              <span role="img" aria-label="Emoji">
                👉
              </span>
              Start Here
            </Link>
            <Link
              to="/Projects"
              className="bg-orange-500 h-10 w-32 rounded-full text-white flex items-center justify-center hover:bg-orange-600"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
