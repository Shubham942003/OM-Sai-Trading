import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../Components/Style-Login.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    

    const handleSubmit= (e) =>
    {
      e.preventDefault();
      const respone=axios.post('/login',{email,password})
      .then(result =>{
        console.log(result)
        if (result.data==="Sucessfully login"){
            navigator('/');
        }
      })
      .catch(err=>console.log(err))
      
      alert("Form Submitted");
      console.log("\n Email:"+email + "\nPassword: " + password);
      setEmail("");
      setPassword("");
    }      
    
    AOS.init();
    
    return (
        <>
            <Header />
            <div className="form-bg">
                <div className="container-fluid py-lg-5 px-lg-5 py-md-5 px-md-5">
                    <div className="row my-lg-5 mx-lg-5 my-md-5 mx-md-5 form-inner-container rounded-5 mx-2 border" data-aos="flip-up" data-aos-duration="1000">
                        <div className="col-md-6 px-md-5 col-10 ms-md-auto ms-5">
                            <div className="d-flex justify-content-around mt-md-5 mt-lg-5 mt-3">
                                <Link><h3 className="login-underline">Login</h3></Link>
                                <Link to="/signup" className="default-link-removed"><h3>Signup</h3></Link>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-lg-4 px-lg-5 mt-md-4 mt-3 px-md-auto px-md-0 px-sm-5">
                                    <input type="email" className="form-control border border-dark py-2" id="exampleInputEmail1" placeholder="
                                Enter Email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>

                                <div className=" mt-lg-5 px-lg-5 mt-md-4 mt-4 px-md-0 px-sm-5">
                                    <input type="password" className="form-control border border-dark py-2" id="exampleInputPassword1"  value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="d-flex justify-content-around mt-lg-5 mb-lg-5 mt-md-4 mb-md-5 mt-4 mb-2">
                                <p className="forgot-password">Forget Password</p>
                                <div>
                                    <button className="btn me-3 text-white px-4 login-signup-button" type="submit"><strong>login</strong></button>
                                </div>
                            </div>
                            </form>
                            {/* <div className="d-flex justify-content-center">
                                 <p className="blue-text lead"><Link to="/signup"><strong>sign-up</strong></Link></p>
                            </div> */}
                        </div>


                        {/*Image Section*/}
                        <div className="col-md-6 col-sm-8 d-flex align-items-center justify-content-end ms-md-auto ms-sm-5 mb-sm-auto mb-2">
                            <div className="ms-md-auto ms-sm-5 mt-md-5">
                                <div className="d-flex justify-content-center align-items-center mt-md-3">
                                    <img src="images/cofee.png" className="img-fluid coffee-img mb-md-5 ms-md-auto ms-sm-3" alt="" />
                                    <img src="images/laptop.png" className="img-fluid laptop-img mb-md-4" alt=""/>
                                    <img src="images/plant-pot.png" className="img-fluid plant-pot-img mt-md-5 me-md-4 me-sm-auto me-4" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;





















