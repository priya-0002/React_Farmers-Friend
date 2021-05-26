import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
import"./feature.css"
import"./table.css"


function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
  const [input, setInput] = useState({firstName:'',lastName:'',gender:'',number:0,city:'',state:'',zip:0,address:'',loanAmount:'',purpose:'',rate:
  '',month:''})
  const [final, setFinal] = useState(0)
  
  const result =(e)=>{
      setInput({...input,[e.target.name]:e.target.value})
      console.log(input)
      }
      
    const submit =(event)=>{
    
      event.preventDefault()
      const x=Number(input.loanAmount)
      const y=Number(input.rate)
      const z=Number(input.month)
     
     const interest = (x * (y * 0.01))/z;
      setFinal(interest)
      
      console.log(final)

    }
  return (
   
  

    

    <section className="relative">
      <br />
      <br />
    <br />
    <br />
   
     

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Instant Loan Calculator</h1>
            <p className="text-xl text-gray-600"></p>
          </div>
          <br />
          <br />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">We exists to manage your loan </h3>
                <p className="text-xl text-gray-600">Please provide in the personal details and the loan details. Get intant loan interest applicable to your loan in no seconds </p>
              </div>
              
              
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
              <div className="login-wrap">
<div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="sign-in"  /><label for="tab-1" className="tab">Details</label>
    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Loan Calculator</label>
    <div className="login-form">
        <div className="sign-in-htm">
            <div className="group">
                <label for="user" className="label">First Name</label>
                <input id="user" type="text" className="input" name="firstName"  onChange={result}  />
            </div>
            <div className="group">
                <label for="pass" className="label">Last Name</label>
                <input id="pass" type="text" className="input" data-type="password" name="lastName"  onChange={result}  />
            </div>
            <div className="group">
                <label for="pass" className="label">Gender</label>
                <input id="pass" type="text" className="input" data-type="password"  name="gender"  onChange={result}  />
            </div>
            <div className="group">
                <label for="pass" className="label">Conatct Number</label>
                <input id="pass" type="number" className="input" data-type="number" name="number" onChange={result}  />
            </div>
            <div className="group">
                <label for="pass" className="label">City</label>
                <input id="pass" type="text" className="input" data-type="text" name="city"  onChange={result} />
            </div>
            <div className="group">
                <input id="check" type="checkbox" className="check" checked />
                <label for="check"><span className="icon"></span> I agree to terms and policies</label>
            </div>
            <div className="group">
              
                <input type="submit" className="button" value="Submit" />
              
            </div>
            
            <div className="hr"></div>
           
        </div>
       
        <div className="sign-up-htm">
            <div className="group">
                <label for="user" className="label"Loan>Loan Amount</label>
                <input id="user" type="number" className="input" name="loanAmount"  onChange={result}  />
            </div>
            <div className="group">
                <label for="pass" className="label">Rate of Interest</label>
                <input id="pass" type="nummber" className="input" data-type="number" name="rate"  onChange={result}  />
            </div>
            <div className="group">
                <label for="pass" className="label">Monthly Repay</label>
                <input id="pass" type="nummber" className="input" data-type="number" name="month"  onChange={result}  />
            </div>
            
            <div className="group">
                <label for="pass" className="label">Purpose of Loan</label>
                <input id="pass" type="text" className="input"  onChange={result}  />
            </div>
            <div className="group">
                <input type="submit" className="button" value="Submit" name="purpose" onClick={submit} />
            </div>
            <div className="hr"></div>
            
        </div>
    </div>
</div>
</div>
              </div>
            </div>
           

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                 
               
                 
                  <div className="relative inline-flex flex-col">
                 <img className="md:max-w-none mx-auto rounded" src={require('../images/farmer.jpg').default} width="500" height="462" alt="Features bg" />
                    
                   
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.png').default} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.png').default} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png').default} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
      <br />
      <br />
      <br />
      <br />
    </section >
    
  );
}

export default Features;