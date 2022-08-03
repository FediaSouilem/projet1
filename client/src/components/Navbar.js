import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { logoutAction } from '../actions/userActions';
import './Navbar.css'
import {RiListCheck} from "react-icons/ri";

const Navbar = () => {
  const dispatch = useDispatch()
  const {isAuth, userInfo} = useSelector(state=>state.user);
  const logout = (e) => {
      console.log('hii')
    e.preventDefault();
    dispatch(logoutAction())
  }
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='Navbar'>
      <span className='nav-logo'>Atelier Med Concept</span>
      <button type='button' className="nav-toggle"></button>
     <span></span>
      {/* <input type='checkbox' id='check'/>
      <label for='check' className="checkbtn">
        <RiListCheck size= "1em" color="white" float='right'/>
      </label> */}
    <div className='nav-item'>
        <Link className='linknav'to= '/'>Accueill</Link> 
        {isAuth ? (
          <> 
          <Link className='linknav' to= '/profile'>{userInfo.name}</Link>
          <button className="button-logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <> 
         
         <Link className='linknav' to= '/Project'>Projets</Link> |  <Link className='linknav' to= '/login'>Connexion</Link>| <Link className='linknav' to= '/contact'>Contact</Link>| <Link className='linknav' to= '/Demanderundevis'>Demander un devis</Link> 
          </>

        )}
    </div>
    </div>
  );
};

export default Navbar