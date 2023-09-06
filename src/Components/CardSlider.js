import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style-CardSlider.css';
import Card from "./Card";

export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const cardData = [
      {
        image: "images/Mountedlight.jpg",
        title: "Mounted Light",
        price: "Rs 0 - Rs 0"
      },
      {
        image: "images/Guage.jpg",
        title:"Guage",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/AluminiumLadder.jpg",
        title:"Alluminium Ladder",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/AmpMeter.jpg",
        title:"Amp Meter",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/CableGlands.jpg",
        title:"Cable Glands",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/FireExtinguisher.jpg",
        title:"Fire Extinguisher",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/PeakMeter.jpg",
        title:"Peak Meter",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/PvcPipe.jpg",
        title:"Pvc Pipe",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/PvcTape.jpg",
        title:"Pvc Tape",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/SafetyHelmet.jpg",
        title:"Safety Helmet",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/SwitchBoard.jpg",
        title:"Switch Board",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/SwitchGear.jpg",
        title:"Switch Gear",
        price: "Rs 0 - Rs 0"
      },
      {
        image:"images/CableLugs.jpg",
        title:"Cable Lugs",
        price: "Rs 0 - Rs 0"
      }
    ];

    return (
      <div className="container">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              price={card.price}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

const CustomPrevArrow = (props) => (
  <button {...props} className="custom-prev-arrow">
    <img src="images/LeftArrow.png" className="logo-img"/>
  </button>
);


const CustomNextArrow = (props) => (
  <button {...props} className="custom-next-arrow">
     <img src="images/RightArrow.png" className="logo-img"/>
  </button>
);