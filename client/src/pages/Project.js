import React, {useState} from "react";
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';
import {useDispatch, useSelector} from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'


import "./Project.css";

const Project = ()=> {
    const {projectList, loading}= useSelector((state) => state.project)
const [slideIndex, setSlideIndex] = useState(1)
const nextSlide = () => {
  if(slideIndex !== dataSlider.length){
    setSlideIndex(slideIndex + 1)
} 
else if (slideIndex === dataSlider.length){
    setSlideIndex(1)
}
}

    const prevSlide = () =>{
      if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(dataSlider.length)
    }
   
  }
  const moveDot = index => {
    setSlideIndex(index)
}

    return(
        
        <div className='containerproject'>
          <div alignItem='center' fontSize='20px'>Nos Projets realisés</div>
          <div>
          
          
          <div className="container-slider">
            {dataSlider.map((obj, index) => {
              return(
               
                <div 
                Key={obj.id}
                className={slideIndex === index +1 ? "slide active-anim" : "slides"}>
                 
                  <img width ="500px" height="500px"src={process.env.PUBLIC_URL +`/Imgs/centre${index + 1}.jpg`}
                  alt="" />
                  </div>
         
              )
            })}
          
           
    <BtnSlider moveSlide={nextSlide} direction={"next"}/>
    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    
<div className="container-dots">
                {Array.from({length: 9}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            <div className='intro-projet'>
  <h6 className="numprojet">Projet: Centre de performance sportif</h6>
  <p className="localisationprojet">Localisation: Chott Meriem Sousse </p>
  <p className="categorieprojet">Catégorie: Haut-Standing </p>
  </div>

         </div>
       


        <div className="container-slider">
            {dataSlider.map((obj, index) => {
              return(
               
                <div 
                Key={obj.id}
                className={slideIndex === index +1 ? "slide active-anim" : "slides"}>
                 
                  <img width ="500px" height="500px"src={process.env.PUBLIC_URL +`/villa tantana/tantana${index + 1}.jpg`}
                  alt="" />
                  </div>
         
              )
            })}
          
           
    <BtnSlider moveSlide={nextSlide} direction={"next"}/>
    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    
<div className="container-dots">
                {Array.from({length: 10}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            <div className='intro-projet-tan'>
  <h6 className="numprojet">Projet: Villa Tantana</h6>
  <p className="localisationprojet">Localisation: Chott Meriem Sousse, Catégorie: Haut-Standing </p>
  </div>
        </div>

        <div className="container-slider">
            {dataSlider.map((obj, index) => {
              return(
               
                <div 
                Key={obj.id}
                className={slideIndex === index +1 ? "slide active-anim" : "slides"}>
                 
                  <img width ="500px" height="500px"src={process.env.PUBLIC_URL +`/villa weslati/wii${index + 1}.jpg`}
                  alt="" />
                  </div>
         
              )
            })}
          
           
    <BtnSlider moveSlide={nextSlide} direction={"next"}/>
    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    
<div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            <div className='intro-projet'>
  <h6 className="numprojet">Projet: Villa Weslati 1</h6>
  <p className="localisationprojet">Localisation: Chott Meriem Sousse, Catégorie: Haut-Standing </p>
  </div>
        </div>


        <div className="container-slider">
            {dataSlider.map((obj, index) => {
              return(
               
                <div 
                Key={obj.id}
                className={slideIndex === index +1 ? "slide active-anim" : "slides"}>
                 
                  <img width ="500px" height="500px"src={process.env.PUBLIC_URL +`/villa wislati 1/wi${index + 1}.jpg`}
                  alt="" />
                  </div>
         
              )
            })}
          
           
    <BtnSlider moveSlide={nextSlide} direction={"next"}/>
    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    
<div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            <div className='intro-projet-w'>
  <h6 className="numprojet">Projet: Villa Weslati 2</h6>
  <p className="localisationprojet">Localisation: Chott Meriem Sousse, Catégorie: Haut-Standing </p>
  </div>
        </div>





        </div>

        
   
<br></br><br></br><br></br>




        {projectList.map(el =>(
            <>
            <h4>{el.Title}</h4>
            <h6>{el.desc}</h6>
            <div className="image-containerproject">
            <img src={el.image} alt="project img" width="360" />
            </div>
            </>
           
            
        ))}
       </div> 
       
    )}
export default Project;
