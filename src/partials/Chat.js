import React from 'react'
import ChatBot from "react-simple-chatbot";
import styled from "styled-components"
import {useState} from "react"

const Chat = () => {
  const [isClicked,setisClicked]=useState(false)

 const  chating = () => {
    <ChatBot 
    speechSynthesis={{ enable: true, lang: 'hi' }}
headerTitle="Speech Recognition"
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
/>

  }
    return (
      
        <div>
         {!isClicked}
           
        </div>
    )
}

export default Chat
