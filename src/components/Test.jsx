import constData from "../constData";
import Connect from "./Connect";

export default function Test() {
  return (
    <>
      <div className="flex h-96 p-8 justify-center">
        <div className="">
          <div className="text-2xl font-bold h-20">
            <h2>
              Hi, I'm {constData.aboutMe.firstName}!{" "}
              <span role="img" aria-label="Emoji">
                🤙🏾
              </span>
            </h2>
          </div>
          <div className="h-20 max-w-2xl">
            <div>{constData.aboutMe.bio}</div>
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
