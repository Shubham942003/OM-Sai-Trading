import "../Components/Style-Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Facebook,
  Instagram,
  WhatsApp,
  Email,
  LinkedIn,
  Share,
  Twitter,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  AOS.init();
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="row">
          {/*---Footer Left Section---*/}

          <div
            className="col-lg-6 ms-lg-5 my-5"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="ms-lg-5 mb-3 d-flex justify-content-center">
              <h3 className="text-white">Share our website to help us grow</h3>
            </div>

            {/*Icons Div*/}
            <div className="d-flex difference-line justify-content-center">
              <div className="mx-5 pe-4 share-btn mb-4 text-white footer-logo">
                <Share />
              </div>
              <div className="me-5 text-white footer-logo">
                <WhatsApp />
              </div>
              <div className="me-5 text-white footer-logo">
                <Facebook />
              </div>
              <div className="text-white footer-logo">
                <Email />
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <h3 className="text-white">Social Media</h3>
            </div>

            <div className="d-flex justify-content-evenly mt-3 text-white footer-logo">
              <Facebook />
              <LinkedIn />
              <Instagram />
              <Twitter />
            </div>
          </div>

          {/*Footer Right Section */}
          <div
            className="col-lg-5 my-lg-5 ms-lg-4"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="d-flex justify-content-center">
              <h3 className="text-white">Jagesh Singh Rajawat (Owner)</h3>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <p className="text-white">
                Address:2117,1st floor,Chah Indara,Bhagirath place,Chandani
                chowk,Delhi 110006
              </p>
            </div>
            <div className="d-flex justify-content-center mt-3 text-white footer-logo">
              <Phone />
              <p className="text-white ps-2">
                <strong>Telephone Number: </strong>
                <span className="data-text pointer-cursor">
                  011-23873590,42316081
                </span>
              </p>
            </div>
            <div className="d-flex mt-1 justify-content-center mt-2 text-white footer-logo">
              <Email />
              <p className="text-white ps-2">
                <strong>Email: </strong>
                <span className="data-text pointer-cursor">
                  omsaitrading.ostc@gmail.com
                </span>
              </p>
            </div>
            <div className="d-flex mt-1 justify-content-center mt-2 text-white footer-logo">
              <WhatsApp />
              <p className="text-white ps-2">
                <strong>Whatsapp Number: </strong>
                <span className="data-text pointer-cursor">+91 9717430487</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
