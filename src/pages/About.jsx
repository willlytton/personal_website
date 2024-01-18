import { Link } from "react-router-dom";
import InfoCard from "../components/ui/InfoCard";
import constData from "../constData";


const About = () => {
  return (
      <div className="flex justify-center">
        <div className="w-full pt-10 max-w-xl py-10">

          <div>
            <h1 className="flex h-16 justify-center text-4xl text-orange-400 font-bold">
              About.
            </h1>
            <p className="pb-10">
              Hi, my name is William and I am fullstack software engineer with a
              love for all things art and understanding of the human experience. Call me a hopeless romantic but I believe by bridging arts and
              technology with a little bit of love we can solve most of the worlds
              problems. I am based out of Brooklyn, NY, but my roots come from the
              peach state, Georgia. If you like what you see and would like
              to reach out please feel free to contact me using the links above
              and below.
            </p>
          </div>

          <div>
            <h1 className="flex h-16 justify-center text-3xl text-orange-400 font-bold">
              Education.
            </h1>
            <p className="pb-10">
              Graduated from Columbus State University in Columbus, GA in 2020 with a BFA specializing in Studio Fine Arts and a concentration
              in Illustration and Traditional Painting. <Link to="/artpage">Click Here to view some of my latest works!</Link>
            </p>
          </div>

          <h1 className="flex h-16 justify-center text-3xl text-orange-400 font-bold">
          Experience.
          </h1>
          
          <div className="flex flex-col gap-5">
            {constData.experience.map((job) => (
              <div className="shadow-md p-10 border-radius rounded-lg bg-transparent">
                <InfoCard
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  description={job.description}
                  years={job.years}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
  );
};

export default About;
