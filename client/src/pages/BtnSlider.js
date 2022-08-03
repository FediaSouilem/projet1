import React, {useState} from "react";
import "./Project.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
const BtnSlider = ({direction, moveSlide})=> {

    return(
        <button className={direction ==="next" ? 'btn-slide next' : "btn-slide prev"}
        onClick={moveSlide}>
         {direction ==="next" ? <AiOutlineRightCircle/> :<AiOutlineLeftCircle/>} 
         
          
        </button>
    )}
    export default BtnSlider;
