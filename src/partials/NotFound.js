import {Link} from "react-router-dom"
import notfound from '../assets/notfound.jpg'

const NotFound=()=>{
    return(
      
        <div className="not-found">
            <br />
            <br />
            <br />
            <br />
            <br />
      <img style= {{width:"37%",marginLeft:"30%"}}src={notfound} alt="" />
      <br />
      <br />
      <Link to="/"><p style= {{marginLeft:"45%"}} className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Back to Home Page.</p></Link>
      <br />
      <br />
      <br />
        </div>
    )
}
export default NotFound;