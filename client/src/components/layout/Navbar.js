import React, { Fragment, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './../../css/navStyle.css'
import AuthContext from '../../context/auth/authContext';
import {useHistory} from 'react-router-dom';
import logo from '../../images/qq.jpg';

const Navbar =() => {
 
  const {isauthenticated , currentUser, logout} = useContext(AuthContext)
  const history = useHistory()

  const M = window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        document.getElementById("myNavP").style.display="block";
    } 
    else
    {
      document.getElementById("myNavP").style.display="none";
    }  
    
}
    window.addEventListener('resize', handleResize)
  })
    

  

  
    function toggelMenu() {
      var x = document.getElementById("myNavP");
      var z=document.getElementsByClassName("menu-iconP")[0];
      
      if (x.style.display === "block") {
        x.style.display = "none";
        z.classList.add("fa-bars");
        z.classList.remove("fa-window-close");
        
      } else {
        x.style.display = "block";
        z.classList.remove("fa-bars");
        z.classList.add("fa-window-close");
        
      }
    }
  
  
  return (
    <>
     
    
        <div id="navbarP" className="navbarP">
      
                  <img src={logo} alt=""  />
      
        <nav1 id="myNavP" >
          <ul className="navP">
          <li >  <NavLink exact to="/" className="listItem" activeStyle={{ fontWeight:"bolder", color:"#e63300"  }}> My Porfolio </NavLink>  </li>
          
          <li > <NavLink to="/projects" className="listItem" activeStyle={{ fontWeight:"bolder", color:"#e63300"  }}>My Projects</NavLink> </li>
         
          <li > <NavLink to="/resumes" className="listItem" activeStyle={{ fontWeight:"bolder", color:"#e63300"  }}>My Resume</NavLink>  </li>
         
          <li > <NavLink to="/about" className="listItem" activeStyle={{ fontWeight:"bolder", color:"#e63300"  }}> About Me</NavLink>
          </li>
          {isauthenticated? 
          <li > {currentUser.firstname} as Admin 
          <i className="fas fa-sign-out-alt  white-text logout-link"  onClick={(e)=>{logout(); history.go(0)}}></i></li>
          :<li> <NavLink to="/login" className="listItem" activeStyle={{ fontWeight:"bolder", color:"#e63300"  }}>Login</NavLink></li>}
  
          </ul>
        </nav1>
        <a className="iconP" onClick={()=>toggelMenu()}>
          <i className="fa fa-bars menu-iconP"></i>
         </a>
          
         </div>

      

 
  </>
  );
};


export default Navbar;
