import Layout from '../Layout';

const About = () => {
  return (
    <Layout>
        <div className="flex h-screen w-full justify-center items-center">
            <div className="max-w-xl">
                <h1 className="flex h-16 justify-center text-4xl text-orange-400 font-bold">About.</h1>
                <p>
                Hi, my name is William and I am fullstack software engineer with a
                love for the arts and figuring out innovatives ways to spark the mind to think outside of the box. 
                So I guess you could call me an exceptional critical thinker. 
                I believe by bridging arts and technology with a
                little bit of love we can solve most of the worlds problems. 
                I am based out of Brooklyn, NY, but I'm rooted from the southern state of Georgia. 
                If you like what you see and would like to reach out please feel free to contact me using the links above and below.
                </p>
            </div>
        </div>
    </Layout>
  );
};

export default About;
