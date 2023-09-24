import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "233px",
};

const buttonStyle = {
  width: "35px",
  height: "35px",
  background: "white",
  borderRadius: "50%",
  margin: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const dotStyle = {
  width: "12px",
  height: "6px",
  margin: "0 3px",
  borderRadius: "30%",
};

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

const MealModal = ({ meal, onClose, onAddMeal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <i class="fi fi-rr-angle-left"></i>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <i class="fi fi-rr-angle-right"></i>
      </button>
    ),
    onChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex); // Update the active index when the slide changes
    },
    indicators: (activeIndex) => (
      <span
        key={activeIndex}
        style={{
          ...dotStyle,
          backgroundColor: activeIndex === currentIndex ? "#410deb" : "#F3F3F3",
        }}
      ></span>
    ),
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-md flex">
        <div className="max-w-[375px] relative">
          <div
            className="bg-black w-6 h-6 z-50 absolute top-6 right-2 rounded-full flex justify-center items-center text-white"
            onClick={onClose}
          >
            <i
              className="fi fi-rr-cross-circle z-50"
              style={{ fontSize: "x-large" }}
            ></i>
          </div>
          <div
            className="bg-[#abc8c881] w-6 h-6 z-50 absolute top-6 right-9 rounded-full flex justify-center items-center text-white border-[2px] border-white"
            onClick={onClose}
          >
            <i class="fi fi-rr-heart" style={{ fontSize: "x-small" }}></i>
          </div>
          <div className="slide-container">
            <Slide {...properties}>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
          <div className="px-6 pb-5 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-lg leading-[21px] tracking-normal text-center font-black text-[#040503] mb-2">
                {meal.name}
              </h3>
              <div className="flex text-[#79E003] font-bold">
                <h6 className="text-xs mr-[3px]">4.7</h6>
                <i class="fi fi-rr-star" style={{ fontSize: "x-small" }}></i>
              </div>
            </div>
            <h5 className="font-sans text-xs leading-4 tracking-normal font-semibold text-[#410deb] whitespace-nowrap mr-4">
              AED {meal.price}
            </h5>
            <p className="text-xs my-6 text-[#2F333399]">{meal.description}</p>
            <button
              className="w-full bg-[#410deb] hover:text-[#410deb] hover:bg-[#ffffff] hover:border-[#410DEB] text-[#ffffff] cursor-pointer border-2 border-[#ffffff] px-4 py-2 rounded-md text-sm"
              onClick={() => {
                onAddMeal();
                onClose();
              }}
            >
              Add Meal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealModal;
