import Connect from "./Connect";
import constData from "../constData";
import resume from "../assets/wimaple.pdf";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-end">
        <div className="">
          <div className="flex gap-4">
            <a href={resume}>Resume</a>
            <a href={`mailto:${constData.socialMedia.email}`}>Contact</a>
          </div>
          <div>
            <p>
              © {constData.aboutMe.firstName} {constData.aboutMe.lastName}{" "}
              {constData.aboutMe.year}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
