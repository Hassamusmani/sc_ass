import React, { useEffect, useState } from "react";

import meal1 from "../../assets/meal1.jpg";
import meal2 from "../../assets/meal2.jpg";
import meal3 from "../../assets/meal3.jpg";
import meal4 from "../../assets/meal4.jpg";
import meal5 from "../../assets/meal5.jpg";
import meal6 from "../../assets/meal6.jpg";
import meal7 from "../../assets/meal7.jpg";
import meal8 from "../../assets/meal8.jpg";
import meal9 from "../../assets/meal9.jpg";
import meal10 from "../../assets/meal10.jpg";

const imageArray = [
  meal1,
  meal2,
  meal3,
  meal4,
  meal5,
  meal6,
  meal7,
  meal8,
  meal9,
  meal10,
];

const RandomImage = () => {
  const [randomImage, setRandomImage] = useState("");

  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImageURL = imageArray[randomIndex];
    setRandomImage(randomImageURL);
  };

  useEffect(() => {
    generateRandomImage();
  }, []);

  return <img src={randomImage} alt="Meal" />;
};

export default RandomImage;
