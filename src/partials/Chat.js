import React from 'react'
import ChatBot from "react-simple-chatbot";
import styled from "styled-components"
import {useState} from "react"
import"./chat.css"
import cha from '../assets/cha.png'
import back from '../assets/back.png'

const Chat = () => {
  const [isClicked,setisClicked]=useState(false)

 const  chating = () => {
   setisClicked(true)
    
  }

  const  nochating = () => {
    setisClicked(false)
     
   }
    return (
      
        <div className="chat">

        <button onClick={chating}> <img style={{width:"50px"}} src={cha} alt="" /> </button>
        
        

         {isClicked ? <div >  <button onClick={nochating}> <img style={{width:"30px"}} src={back} alt="" /> </button> <div style={{marginLeft:"-65%"}}> <ChatBot
         
    speechSynthesis={{ enable: true, lang: 'hi' }}
headerTitle="How may I help"
recognitionEnable={true}
steps={[
 {
   id: '1',
   message: 'What is your name?',
   trigger: '2',
 },
 {
   id: '2',
   user: true,
   trigger: '3',
 },
 {
   id: '3',
   message: 'Hi {previousValue}, nice to meet you! How may I help you?',
   trigger: '4',
 },
 {
   id: '4',
  
   options: [
     { value: 1, label: 'Training Sessions', trigger: '5' },
     { value: 2, label: 'Family Welfare', trigger: '6' },
     { value: 3, label: 'Loan Enquiries', trigger: '7' },
   ],
 
 },
 {
   id: '5',
   message: 'Will be updated by message to your contact number',
   
   trigger: '4',
 
 },

 
 {
   id: '6',
   message: 'Please check welfare page',
   trigger: '4',
  
 },
 {
   id: '9',
  
  message:'Thank you',
  trigger:4
 
 },
 {
   id: '7',
   message: 'Please contact us',
   trigger: 4,
   
 },
 
 {
   id: '10',
   message: 'Thank you',
   
   end:true
 },
]} 
/> </div>

</div> : null
}
           
        </div>
    )
}

export default Chat
