import car from "./assets/art/car.png";
import jonah from "./assets/art/baby_jonah.JPG";
import untitled2020 from "./assets/art/untitled2020.png";
import paintedWoman from "./assets/art/painted_woman.JPG";
import paintedWoman2 from "./assets/art/painted_woman_2.JPG";
import carcosa from "./assets/art/they_said.png";
import oshisHouse from "./assets/art/oshis_house.png";
import abbigail from "./assets/art/abbigail.JPG";

export default {
  aboutMe: {
    firstName: "Will",
    lastName: "Lytton",
    bio: "I'm a Fullstack Software Engineer currently residing in Brooklyn, NY looking for full-time opportunities. Look upon my works and if you like what you see, feel free to contact me using the socials.",
    year: new Date().getFullYear(),
  },

  socialMedia: {
    linkedin: "https://www.linkedin.com/in/villmapple/",
    email: "liam.maple00@gmail.com",
    github: "https://github.com/willlytton",
  },

  socialMediaIcons: {
    linkedin: "./assets/linkedin.svg", // "./assets/linkedin.svg
    email: "./assets/email.svg",
    github: "./assets/github.svg",
  },

  experience: [
    {
      id: 1,
      title: "FullStack Software Engineer",
      company: "Freelance",
      description: "Working as a freelance software developer and designer for a variety of clients I have done everything from centering a div (literally!), to building client ideas from hand drawn website idea to fully functioning web app. During this time I have gained experience in a variety of web technologies from React with JavaScript and TypeScript to Node.JS and Python for backend development. During these ventures the most important resource for me has been the internet and the vast community of developers that maintain these modern libraries and frameworks.",
      years: "October 2022 - Present",
    },
    {
      id: 2,
      title: "Network Engineer",
      company: "Mediacom Communications",
      description: "I worked as a network maintence engineer for a year acquring valuable experience learning the inner workings of coaxial cable, fiber optics, and internet infrastructure. I collaborated with several teams to ensure the stability of the regional network and to troubleshoot any issues that arose.",
      years: "July 2021 - August 2022",
    },

  ],

  works: [
    {
      id: 1,
      title: "Central Highlands",
      description: "Oil on wood panel",
      year: 2020,
      image: car,
    },
    {
      id: 2,
      title: "untitled",
      description: "Oil on wood panel",
      year: 2020,
      image: untitled2020,
    },
    {
      id: 3,
      title: "alla prima of a woman",
      description: "Oil on wood panel",
      year: 2020,
      image: paintedWoman,
    },
    {
      id: 4,
      title: "alla prima of a woman 2",
      description: "Oil on wood panel",
      year: 2020,
      image: paintedWoman2
    },
    {
      id: 5,
      title: "They said it was six beams of yellow light/ Carcosa",
      description: "Oil on wood panel",
      year: 2020,
      image: carcosa
    },
    {
      id: 6,
      title: "Oshi's House",
      description: "Oil on canvas",
      year: 2020,
      image: oshisHouse,
    },
    {
      id: 7,
      title: "Jonah",
      description: "Oil on moleskin paper",
      year: 2019,
      image: jonah,
    },
    {
      id: 8,
      title: "Abigail",
      description: "Oil on moleskin paper",
      year: 2019,
      image: abbigail,
    }
  ],

  digital: [
    {
      id: 1,
      title: "untitled",
      description: "digital",
      year: 2019,
      image: "./assets/artImages/digital_1.jpg"
    },
    {
      id: 2,
      title: "untitled",
      description: "digital",
      year: 2019,
      image: "./assets/artImages/digital_2.jpg"
    },
    {
      id: 3,
      title: "untitled",
      description: "digital",
      year: 2017,
      image: "./assets/artImages/digital_3.jpg"
    },
    {
      id: 4,
      title: "frame painting",
      description: "procreate",
      year: 2020,
      image: "./assets/artImages/scene_from_movie.jpg"

    },
    {
      id: 5,
      title: "untitled",
      description: "pencil scanned and colored in photoshop",
      year: 2019,
      image: "./assets/artImages/digital_4.jpg"
    }
  ]
};
