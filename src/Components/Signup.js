import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Style-Signup.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    const respone = axios
      .post("/sigin", { name, email, password })
      .then((respone) => console.log(respone))
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
    setName("");
  };
  AOS.init();

  return (
    <>
      <Header />
      <div className="form-bg">
        <div className="container-fluid py-lg-5 px-lg-5 py-md-5 px-md-5">
          <div
            className="row my-lg-5 mx-lg-5 my-md-5 mx-md-5 form-inner-container rounded-5 mx-2 border"
            data-aos="flip-down"
            data-aos-duration="1000"
          >
            <div className="col-md-6 px-md-5 col-10 ms-md-auto ms-5">
              <div className="d-flex justify-content-around mt-md-5 mt-lg-5 mt-3">
                <Link to="/login" className="default-link-removed">
                  <h3>Login</h3>
                </Link>
                <h3 className="signup-underline">Signup</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-lg-5 px-lg-5 mt-md-4 mt-3 px-md-auto px-md-0 px-sm-5">
                  <input
                    type="text"
                    className="form-control border border-dark py-2"
                    id="nameInput"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-lg-4 px-lg-5 mt-md-4 mt-3 px-md-auto px-md-0 px-sm-5">
                  <input
                    type="email"
                    className="form-control border border-dark py-2"
                    id="exampleInputEmail1"
                    placeholder="
                                Enter Email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className=" mt-lg-4 px-lg-5 mt-md-4 mt-4 px-md-0 px-sm-5">
                  <input
                    type="password"
                    className="form-control border border-dark py-2"
                    id="exampleInputPassword1"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-around mt-lg-5 mb-lg-5 mt-md-4 mb-md-5 mt-4 mb-2">
                  <div>
                    <button
                      className="btn me-3 text-white px-4 login-signup-button"
                      type="submit"
                    >
                      <strong>signup</strong>
                    </button>
                  </div>
                </div>
              </form>
              {/* <div className="d-flex justify-content-center">
                                <p>Already Registered <Link to="/login"><span className="blue-text lead"><strong>log-in</strong></span></Link></p>
                            </div> */}
            </div>

            {/*Image Section*/}
            <div className="col-md-6 col-sm-8 d-flex align-items-center justify-content-end ms-md-auto ms-sm-5 mb-sm-auto mb-2">
              <div className="ms-md-auto ms-sm-5 mt-md-5">
                <div className="d-flex justify-content-center align-items-center mt-md-3">
                  <img
                    src="images/cofee.png"
                    className="img-fluid coffee-img mb-md-5 ms-md-auto ms-sm-3"
                    alt=""
                  />
                  <img
                    src="images/laptop.png"
                    className="img-fluid laptop-img mb-md-4"
                    alt=""
                  />
                  <img
                    src="images/plant-pot.png"
                    className="img-fluid plant-pot-img mt-md-5 me-md-4 me-sm-auto me-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
