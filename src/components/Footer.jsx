import Connect from "./Connect";
import constData from "../constData";
import resume from "../assets/wimaple.pdf";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-end py-8 px-4">
        <div className="">
          <div className="flex items-center flex-col gap-4 pb-5">
            <Connect />
            <div className="flex gap-4">
              <a href={resume}>Resume</a>
              <a href={`mailto:${constData.socialMedia.email}`}>Contact</a>
            </div>
          </div>
          <div>
            <p>
              © {constData.aboutMe.firstName} {constData.aboutMe.lastName}{" "}
              {constData.aboutMe.year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
