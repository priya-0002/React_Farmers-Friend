import  { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';
import { UserContextProvider } from './contexts/user'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Footer from './partials/Footer';
import Features from './partials/Features';
import FeaturesBlocks from './partials/FeaturesBlocks';
import Testimonials from './partials/Testimonials';
import Newsletter from './partials/Newsletter';
import Header from './partials/Header';
import NotFound from './partials/NotFound';
import About from './partials/About';
import Sechmes from './partials/Sechmes';
import Policy from './partials/Policy';
import Chat from './partials/Chat';
import Bid from './Bid';






function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
    
        <UserContextProvider>
       
      <Switch>
        <Route  path="/home">
        <Header />
          <Home />
        </Route>
        <Route path="/loan">
        <Header />
        <Features/>
       
        </Route>

        <Route path="/bid">
        <Bid/>
       
        </Route>

        <Route path="/weather">
        <Header />
        <FeaturesBlocks />
        </Route>
         
        
       
        
        
         
       
         
        
       
        <Route path="/about">
        <Header />
        <About/>
       
        </Route>
     
        <Route path="/sechmes">
        <Header />
        <Sechmes/>
       
        </Route>
        
        <Route path="/policy">
        <Header />
        <Policy/>
       
        </Route>
        
       
        <Route path="/donation">
        <Header />
        <Testimonials/>
       
        </Route>
        <Route path="/contact">
        <Header />
        
        <Newsletter />
        </Route>
      
      
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="*">
         <NotFound/>
       </Route>
      </Switch>
      <Chat />
      <Footer/>
      </UserContextProvider>
      
        
    </>
  );
}

export default App;