import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'
import home1 from "../photo/home1.jpg"
import home2 from "../photo/home2.jpg"
import home3 from "../photo/home3.jpg"
import {Link} from 'react-router-dom';
import { MdOutlineDesignServices, MdHomeWork, MdChair, MdOutlineHandyman} from "react-icons/md";
import { AiOutlineFileDone, AiFillSetting } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";
import { FaKey } from "react-icons/fa";
import med from "../photo/med.jpg"
const counters = document.querySelectorAll('counter');
counters.forEach((counter) => {
  counter.innerText="0";
  const updateCounter = () => {
    const target = +counter.getAttribute ('data-target')
  
  const c = +counter.innerText;
  const increment = target / 2;
  if (c < target){
    counter.innerText = `${Math.ceil(c + increment)}`;
    setTimeout(updateCounter, 1);
  } else{
    counter.innerText = target;
  }
};
  updateCounter();

});

const Home = () => {

  return (
//     <div>
//       <h5 class="jet-slider__title">We Build the Future</h5>
		
//     <div class="jet-slider__desc">Best Ideas – Best Solution – Best Result</div>
//   
    // </div>
   <div>
      <Carousel>
  <Carousel.Item>
    <img width ="700px" height="900px"
      className="d-block w-100"
      src={home1}
      alt="First slide"
    />
    <Carousel.Caption className='carousel'>
      <h2>Atelier Med_Concept</h2>
      <h3>Meilleures <span>idées</span> - Meilleure <span>solution</span> - Meilleur <span>résultat</span></h3>
      <p className="contacthome"><Link to= '/contact'>Contactez-nous</Link></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={home2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2>Atelier Med_Concept</h2>
      <h3>Meilleures <span>idées</span> - Meilleure <span>solution</span> - Meilleur <span>résultat</span></h3>
      <p className="contacthome"><Link to= '/contact'>Contactez-nous</Link></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={home3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <div className='titreatelier'>
    <h2>Atelier Med_Concept</h2>
    </div>
      <h3>Meilleures <span>idées</span> - Meilleure <span>solution</span> - Meilleur <span>résultat</span></h3>
      <p className="contacthome"><Link to= '/contact'>Contactez-Nous</Link></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="paragraphe">			   	
      Atelier Med_Concept est un bureau d’architecture fondée en 2014 à Tunis par Mohamed Ali Souilem aprés une grande expérience dans la conception et la réalisation de projets , depuis 2010. 
      
      Notre bureau d’architecture traite tout type de projet d’architecture dans le secteur de l’architecture privée et hytatique ,d’architecture d’intérieur et dans l’industrie de la construction de maisons.
      Il est spécialisée dans la conception architecturale et d’architecture d’intérieur pour des clients domestiques et commerciaux, prépare des dessins pour les aider à obtenir des plans de construire et rénover les maisons.Il élabore les pièces écrites techniques et administratives nécessaires à la demande du permis de construire et à l’avancement du projet. Il participe aussi au choix des matériaux ou des couleurs. 
     </div>

     <div className='function-atelier'>
     <div className='function'>
      <div className='iconatelier'><MdHomeWork size= "4em" color="darkgoldenrod"/> </div>
      <div className='function-paragraphe'>ARCHITECTURE <br></br>La conception est l’étude qui permet de rendre votre maison confortable, saine, économe en énergie, esthétique, solide et économique. </div>
     </div>
     <div className='function'>
     <div className='iconatelier'><AiOutlineFileDone size= "4em" color="darkgoldenrod"/> </div>
     <div className='function-paragraphe'>MISSION PERMIS DE CONSTRUIRE <br></br>Une mission dite “de permis de construire” a pour but de concevoir le projet architectural contenu dans la demande de permis de construire ou la déclaration préalable de travaux. </div>
     </div>
     <div className='function'> 
     <div className='iconatelier'><MdOutlineHandyman size= "4em" color="darkgoldenrod"/></div> 
<div className='function-paragraphe'>MISSION DE MAITRISE D'OEUVRE COMPLETE <br></br>Une mission dite “complète” inclue la mission “permis de construire” vue au paragraphe précédemment, à laquelle on ajoute  le suivi des travaux.</div>
</div>
      <div className='function'> 
      <div className='iconatelier'> <MdChair size= "4em" color="darkgoldenrod"/> </div>
      <div className='function-paragraphe'>AMÉNAGEMENT INTÉRIEUR <br></br>Travaux d’intérieur en prévision? Retrouvez tous nos conseils pour vous aider dans l’aménagement d’un dressing, d’un petit espace, d’un escalier...</div>
</div>
<div className='function'> 
<div className='iconatelier'><MdOutlineDesignServices size= "4em" color="darkgoldenrod"/></div> 
<div className='function-paragraphe'>DESIGN INTÉRIEUR <br></br>A la recherche d'une idée déco originale ? Nous vous propose des idées pour décorer votre salon ou votre maison.</div>
</div>
<div className='function'> 
<div className='iconatelier'><FiCheckSquare size= "4em" color="darkgoldenrod"/></div>
<div className='function-paragraphe'>MISSION PONCTUELLES(CONSEIL, EXPERTISE) <br></br>Nous pouvons également réaliser les missions de conseil ou d’expertise suivantes :conseil avant achat ou vente immobilier; assistance à la réception des travaux réalisés par des artisans ou bien par un constructeur de maison individuelle; conseil ou avis sur un sujet précis avant travaux; relevé des ouvrages existants.</div>
</div>
</div>

<h3>Nos Réalisations</h3>
<br></br>
<div className='contentrea'>
<div className='containerrea'>
<div className='iconrea'><BsGraphUp size= "2em" color="darkgoldenrod"/><br></br>
<div className='counter' data-target='5'>5</div><div className='descripprojet'>Années d'exercice</div></div>
</div>
<div className='containerrea'>
<div className='iconrea'><MdOutlineDesignServices size= "2em" color="darkgoldenrod"/><br></br>
<div className='counter' data-target='120'>120</div><div className='descripprojet'>Projets étudiées</div></div>
</div>
<div className='containerrea'>
<div className='iconrea'><FaKey size= "2em" color="darkgoldenrod"/><br></br>
<div className='counter' data-target='50'>50</div><div className='descripprojet'>Projets réalisées</div></div>
</div>
<div className='containerrea'>
<div className='iconrea'><AiFillSetting size= "2em" color="darkgoldenrod"/><br></br>
<div className='counter' data-target='10'>10</div><div className='descripprojet'>Projets en cours</div></div>
</div>
</div>
<br></br>
<h3 class="special-h-tag">Architecte Fondateur </h3>
      
<h5>Notre équipe se compose de plusieurs architectes et interior designers sous la direction d'un architecte</h5>
<div className='container-fo'>
  <div className='card-fo'>
  <img src={med} width="350px" height='400px' alt="Mohamed Ali Souilem"/>
  <div className='intro'>
  <h6 className="team-title">Mohamed Ali Souilem</h6>
  <p className="designation">Architecte </p>
  </div>
  </div>
  </div>

  </div>

  )
}

export default Home