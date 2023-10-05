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
