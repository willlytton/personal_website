import { Link } from "react-router-dom";
import Layout from "../Layout";

const About = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-full pt-10 max-w-xl py-10">

          <div className="">
            <h1 className="flex h-16 justify-center text-4xl text-orange-400 font-bold">
              About.
            </h1>
            <p className="pb-10">
              Hi, my name is William and I am fullstack software engineer with a
              love for the arts and all things related to the human experience. I believe by bridging arts and
              technology with a little bit of love we can solve most of the worlds
              problems. I am based out of Brooklyn, NY, but I'm rooted from the
              southern state of Georgia. If you like what you see and would like
              to reach out please feel free to contact me using the links above
              and below.
            </p>
          </div>

          <div className="">
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
            <h3 className="">
              Mediacom Communications
            </h3>
            <p>Network Engineer I</p>
            <p>* Maintained regional downstream and upstream signal quality by updating system readings for maximum data thru‐put.</p>
          </div>

          <div className="flex justify-center">
            <Link 
              to="/Projects"
              className="bg-orange-500 h-10 w-32 rounded-full text-white flex justify-center items-center gap-1 hover:bg-orange-600"
            >
              <span role="img" aria-label="Emoji">
                👉
              </span>
                Projects
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default About;
