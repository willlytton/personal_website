import constData from "../constData";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/mail.svg";

export default function Connect() {
  return (
    <>
      <div className="flex gap-2 ">
        <a href={constData.socialMedia.linkedin}>
          <img className="h-8 transition-transform transform hover:scale-105" src={linkedin} alt="linkedin"></img>
        </a>
        <a href={`mailto:${constData.socialMedia.email}`}>
          <img className="h-8 transition-transform transform hover:scale-105" src={email} alt="email"></img>
        </a>
        <a href={constData.socialMedia.github}>
          <img className="h-8 transition-transform transform hover:scale-105" src={github} alt="github"></img>
        </a>
      </div>
    </>
  );
}
