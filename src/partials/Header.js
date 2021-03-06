import React, { useState, useEffect ,useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../contexts/user'
import firebase from "firebase";
import { useHistory} from "react-router-dom";
import { auth } from "../firebase";

function Header() {
  const [user,setUser] = useContext(UserContext).user;
  const [top, setTop] = useState(true);


let history=useHistory();

  async function logout() {
    let logout_success;
    await auth.signOut().then(()=>{
        logout_success=true;
       
        history.push("/")
     
      
    }).catch((error)=>{
        console.log(error.message);
    });
    setUser(null);
  }
  

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {

    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
          // store the user on local storage
          setUser(user)
          
      } 
  })
  console.log(user)
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
               { user? <Link to="/home" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>:""}
              </li>
              <li>
                <Link to="/home" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              <li>
                <Link to="/loan" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Loan</Link>
              </li>
              <li>
                <Link to="/weather" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Weather</Link>
              </li>
              <li>
                <Link to="/sechmes" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sechmes</Link>
              </li>
              
              <li>
                <Link to="/bid" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Produce</Link>
              </li>
              <li>
                <Link to="/contact" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contact Us</Link>
              </li>
              <li>
                <Link to="/donation" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Donate</Link>
              </li>
              <li>
               { !user?<Link to="/" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign In</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>:<Link onClick={logout} className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>logout</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                  
                </Link>}
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;

