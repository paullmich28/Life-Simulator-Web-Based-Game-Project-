import React, { useState } from 'react';
import { SliderSetting } from "./SliderSetting.js";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ImageSlider = ({slides}) => {
    const [curr, setCurr] = useState(0);
    const length = slides.length;

    function nextSlide(){
        setCurr(curr === length - 1 ? 0 : curr + 1);
    }

    function prevSlide(){
        setCurr(curr === 0 ? length - 1 : curr - 1);
    }

    switch(curr){
        default:
            localStorage.setItem("karakter","Mario");
            break;
        case 1:
            localStorage.setItem("karakter","Luigi");
            break;
        case 2:
            localStorage.setItem("karakter","Peach");
            break;
        case 3:
            localStorage.setItem("karakter","Rosalina");
            break;
    }

    return (
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderSetting.map((slide, index)=>{
                return(
                    <div className={index === curr ? "slide active" : "slide"} key={index}>
                        {index === curr && (
                            <img src={slide.imgURL} alt="karakter" className="image" />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider