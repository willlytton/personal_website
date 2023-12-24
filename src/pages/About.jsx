import { Link } from "react-router-dom";


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
              love for all things art understanding of the human experience. I believe by bridging arts and
              technology with a little bit of love we can solve most of the worlds
              problems. I am based out of Brooklyn, NY, but I'm rooted from the
              southern state of Georgia. If you like what you see and would like
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

          <div className>
            <h1 className="flex h-16 justify-center text-3xl text-orange-400 font-bold">
              Experience.
            </h1>
              <h3>Mediacom Communications</h3>
                <p>Network Engineer I</p>
                  <li>Maintained regional downstream and upstream signal quality by updating system readings for maximum data thru‐put.</li>
                  <li>Updated company database with coaxial frequency readings from area tap for system upkeep.</li>
                  <li>Provided onboarding to newhires by showcasing best company practices, procedures, and systems to facilitate a smooth transition into their roles.</li>
          </div>
        </div>
      </div>
  );
};

export default About;
