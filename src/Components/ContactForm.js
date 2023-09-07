import '../Components/Style-ContactForm.css';
import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

{/*Contact Us Form*/ }


const ContactForm = () => {
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [name, setName] = useState("");

  const handleContact = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    console.log("\n Query: " + query + "\n email: " + email + "\n phonenumber: " + phonenumber + "\n name: " + name);
    setQuery("");
    setEmail("");
    setPhonenumber("");
    setName("");
  }

  AOS.init();

  return (
    <>
      <div className="container-fluid contact-container" id="contactFormSection" data-aos="zoom-in" data-aos-duration="1000">
        <div className="row d-flex justify-content-center">
          <div className="col-8 contact-form-bg my-5 rounded-4" data-aos="zoom-in-up" data-aos-duration="1500">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <div className="mt-4 mb-3">
                  <h1 className="contact-textcolor">Contact Us</h1>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <form onSubmit={handleContact}>
                  <div>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Query..." rows="4" value={query} onChange={(e) => setQuery(e.target.value)}>
                    </textarea>
                  </div>
                  <div className="row">
                    <div className="col-md-6 my-md-5 mt-4 ">
                      <div className="input-group">
                        <input type="text" className="form-control form-name py-2" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-md-6 my-md-5 mt-4">
                      <div className="input-group">
                        <input type="tel" className="form-control py-2" id="phoneNumber" placeholder="Enter phone number" pattern="[0-9]{10}" required value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8 mb-md-5 mt-4">
                      <input type="email" className="form-control py-2" id="colFormLabel" placeholder="Enter Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-md-4 my-4">
                      <button className="btn send-btn px-5 text-white py-2" type="submit"><strong>Send</strong></button>
                    </div>
                    <div class="mb-3">
                      <label for="fileInput" class="form-label">Choose a file:</label>
                      <input type="file" class="form-control mb-3" id="fileInput" name="file"/>
                      <button type="submit" class="btn btn-primary">Upload</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ContactForm;