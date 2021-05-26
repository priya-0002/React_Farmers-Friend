import React,{useEffect,useContext} from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import firebase from "firebase";

import { auth } from "../firebase";
import {UserContext} from '../contexts/user'

function Home() {
  const [user,setUser] = useContext(UserContext).user;

  useEffect(() => {
    if(user){
      firebase.auth().onAuthStateChanged(user=>{
        if (user) {
            // store the user on local storage
            setUser(user)
            
        } 
    })
    console.log(user)
    }
    
  }, [])
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
     

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
       
        
        

      </main>

      {/*  Site footer */}
    

    </div>
  );
}

export default Home;