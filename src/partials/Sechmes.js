import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';



 
const Sechmes = () => {
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
  
    return (
      
        <div>
          <br /><br />
           <section className="relative">
             

{/* Section background (needs .relative class on parent and next sibling elements) */}
<div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
  <div className="pt-12 md:pt-20">

    {/* Section header */}
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
      <h1 className="h2 mb-4">Government schemes for farmers</h1>
      <p className="text-xl text-gray-600">These agricultural schemes are very beneficial for the farmers and they must know about it so as to take its benefit..</p>
    </div>

    {/* Section content */}
    <div className="md:grid md:grid-cols-12 md:gap-6">

      {/* Content */}
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
          <h3 className="h3 mb-3"> Most Popular</h3>
          <p className="text-xl text-gray-600"></p>
        </div>
        {/* Tabs buttons */}
        <div className="mb-8 md:mb-0">
          <a
            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
            href="#0"
            onClick={(e) => { e.preventDefault(); setTab(1); }}
          >
            <div>
              <div className="font-bold leading-snug tracking-tight mb-1">PM-Kisan Scheme</div>
            <a href="www.pmkisan.gov.in/"> <div className="text-gray-600">Pradhan Mantri Kisan Samman Nidhi Yojana is an initiative of the Government wherein 120 million small and marginal farmers of India with less than two hectares of landholding will get up to Rs. 6,000 per year as minimum income support. PM-Kisan scheme has become operational since 1st December 2018. Under this scheme, cultivators will get Rs. 6000 in three installments.For more details check </div></a> 
              
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
              </svg>
            </div>
          </a>
          <a
            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
            href="#0"
            onClick={(e) => { e.preventDefault(); setTab(2); }}
          >
            <div>
              <div className="font-bold leading-snug tracking-tight mb-1">Kisan Credit Card (KCC) scheme</div>
              <div className="text-gray-600">is yet another important Government scheme that provides farmers with timely access to credit. Kisan Credit Card scheme was introduced in 1998 to provide short-term formal credit to the farmers. KCC scheme was launched to ensure that the credit requirements for cultivators in the agriculture, fisheries & animal husbandry sector were being met. Under this scheme, farmers are given short-term loans to purchase equipment & for their other expenses as well. There are many banks that offer KCC including SBI, HDFC, ICICI, Axis. .</div>
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
              </svg>
            </div>
          </a>
          <a
            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
            href="#0"
            onClick={(e) => { e.preventDefault(); setTab(3); }}
          >
            <div>
              <div className="font-bold leading-snug tracking-tight mb-1">Pradhan Mantri Kisan Maandhan yojana</div>
             <a href=""> <div className="text-gray-600">Prime Minister Narendra Modi launched a pension scheme for the small & marginal farmers of India last September. Under PM Kisan Maandhan scheme about 5 crore marginalised farmers will get a minimum pension of Rs 3000 / month on attaining the age of 60. Those who fall in the age group of 18 - 40 years will be eligible to apply for the scheme. Under this scheme, the farmers will be required to make a monthly contribution of Rs 55 to 200, depending on their age of entry, in the Pension Fund till they reach the retirement date, 60 years. The Government will make an equal contribution of the same amount in the pension fund for the cultivators..</div></a>
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
              </svg>
            </div>
          </a>
        </div>
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
            <circle cx="1232" cy="128" r="128" />
            
          </g>
        </svg>
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
              <img className="md:max-w-none mx-auto rounded" src={require('../images/fourth.jpg').default} width="500" height="462" alt="Features bg" />
              
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
              <img className="md:max-w-none mx-auto rounded" src={require('../images/second.jpg').default} width="500" height="462" alt="Features bg" />
              
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
              <img className="md:max-w-none mx-auto rounded" src={require('../images/third.jpg').default} width="500" height="462" alt="Features bg" />
              
            </div>
          </Transition>
        </div>
      </div >

    </div >

  </div >
</div >
</section >  
<br /><br /><br /><br /><br />

        </div>
    )
}

export default Sechmes
