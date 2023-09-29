import constData from "../constData";
import Connect from "./Connect";

export default function LandingPage() {
  return (
    <>
      <div className="flex h-screen py-16 justify-center">
        <div className="">
          <div className="text-2xl font-bold pb-8">
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
          <div className="">
            <Connect />
          </div>
        </div>
      </div>
    </>
  );
}
