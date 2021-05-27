import React from 'react'

const Policy = () => {
    return (
        <div>
              <br /><br /><br />
              <section className="relative">

{/* Illustration behind content */}
<div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
  <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#EAEAEA" offset="77.402%" />
        <stop stopColor="#DFDFDF" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
      <circle cx="1630" cy="128" r="128" />
      <circle cx="178" cy="481" r="40" />
    </g>
  </svg>
</div>

<div className="max-w-6xl mx-auto px-4 sm:px-6">
  <div className="py-12 md:py-20">

  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
     <h2 className="h2 mb-4">Our Policy</h2>
    </div>
    {/* Testimonials */}
    <div style={{marginTop:"0%"}} className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
      <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

        {/* Testimonial */}
       
          <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
            <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
            </svg>
            
          </div>
        
          <div className="text-gray-600">
           We collect anonymous data from every visitor of the Website to monitor traffic and fix bugs. For example, we collect information like web requests, the data sent in response to such requests, the Internet Protocol address, the browser type, the browser language, and a timestamp for the request.

We ask you to log in and provide certain personal information (such as your name and email address) in order to be able to save your profile and the documents and comments associated with it. In order to enable these or any other login based features, we use cookies to store session information for your convenience. You can block or delete cookies and still be able to use Contently, although if you do you will then be asked for your username and password every time you log in to the Website. In order to take advantage of certain features of the Website, you may also choose to provide us with other personal information, such as your picture or personal Website, but your decision to utilize these features and provide such data will always be voluntary.

You are able to view, change and remove your data associated with your profile. Should you choose to delete your account, please contact us at support@contently.com, and we will follow up with such request as soon as possible.

We also use Chorus.ai to record any sales and status calls with our customer-facing teams. These recordings may include your personal information if you choose to share any personal information during your call. We will notify you prior to starting the recording, but you will not be able to opt out of the call being recorded by Chorus.ai. To learn more about Chorus.ai, please visit
</div>
          <cite className="block font-bold text-lg not-italic mb-1"></cite>
          <div className="text-gray-600">
            <span>Started in 2021</span> <a className="text-blue-600 hover:underline" href="#0"></a>
          </div>
        </div>

      </div>
    </div>

  </div>

</section>
    </div>

    )
}

export default Policy
