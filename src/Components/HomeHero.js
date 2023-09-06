import './Style-HomeHero.css';
import AOS from "aos";
import "aos/dist/aos.css";



const HomeHero = () => {
  

  AOS.init();
  return (
    <>
      <div className="hero-background">
        <div className="row">
          <div className="col-sm-10 display-6 mt-lg-4 ps-lg-5">
            <h1 className="ps-lg-5 ps-md-4 ps-sm-2 ps-3">We are regular suppliers to following units and organization</h1>
          </div>
          <div className="col-sm-2 mt-lg-2 ps-md-3 ps-sm-1">
            <img src="images/tag.png" className="tag px-md-1 py-md-1 px-sm-2 py-sm-2" alt='' />
          </div>
        </div>

        {/*Hero Section Ticks*/}
        <div className="row mt-lg-4 mt-md-3 mt-sm-2">
          <div className="col-md-3 col-sm-6 col-6 ps-md-5 d-flex justify-content-start">
            <img src="images/tick.png" className="tick me-3 ms-md-5" alt='' />
            <p className="lead">Oil Plants</p>
          </div>

          <div className="col-md-3 col-sm-6 col-6 ps-md-5 d-flex justify-content-start">
            <img src="images/tick.png" className="tick me-3 ms-md-5"  alt=''/>
            <p className="lead">Steel Plants</p>
          </div>

          <div className="col-md-3 col-sm-6 col-6 ps-md-5 d-flex justify-content-start">
            <img src="images/tick.png" className="tick me-3 ms-md-5" alt='' />
            <p className="lead">Paper Mills</p>
          </div>

          <div className="col-md-3 col-sm-6 col-6 ps-md-5 d-flex justify-content-start">
            <img src="images/tick.png" className="tick me-3 ms-md-5" alt=''/>
            <p className="lead">Sugar Mills</p>
          </div>
        </div>



        <div className="row mt-lg-4 mt-md-3">
          <div className="col-md-3 col-sm-6 col-6 ps-md-5 d-flex justify-content-start">
            <img src="images/tick.png" className="tick me-3 ms-md-5" alt=''/>
            <p className="lead">Chemicals</p>
          </div>

          <div className="col-md-3 col-sm-6 col-6 d-flex ps-md-5 justify-content-start">
            <img src="images/tick.png" className="tick me-3 ms-md-5" alt=''/>
            <p className="lead">Govt. suppliers</p>
          </div>

          <div className="col-md-3 col-sm-6 col-6 d-flex ps-md-5 justify-content-start">
            <img src="images/tick.png" className="tick me-3 ms-md-5" alt=''/>
            <p className="lead">Industrial units</p>
          </div>

          <div className="col-md-3 col-sm-6 col-6 ps-md-5 d-flex justify-content-start">
            <img src="images/tick.png" className="tick me-3 ms-md-5" alt=''/>
            <p className="lead">Cement Plants</p>
          </div>
        </div>
      </div>

      {/*Table*/}

      <div className='container' data-aos="zoom-in-down" data-aos-duration="2000">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <div className="d-flex justify-content-center mt-5 table-heading">
              <h2>Basic Information</h2>
            </div>
            <table cellPadding="10" cellSpacing="10" className=" table table-bordered-vertical table-bordered border-dark table-striped">
              <tbody>
              <tr className="table-text">
                <th className="lead"><strong>Nature of Business</strong></th>
                <td>Wholesaler</td>
              </tr>
              <tr className="table-text">
                <th className="lead"><strong>Owner</strong></th>
                <td>Jagesh Singh Rajawat</td>
              </tr>
              <tr className="table-text">
                <th className="lead"><strong>Year of Establishment</strong></th>
                <td>2010</td>
              </tr>
              <tr className="table-text">
                <th className="lead"><strong>Annual Turnover</strong></th>
                <td>2-2.5</td>
              </tr>
              <tr className="table-text">
                <th className="lead"><strong>GST No.</strong></th>
                <td>07AACF03060E1Z0</td>
              </tr>
              <tr className="table-text">
                <th className="lead"><strong>Shipment Mode</strong></th>
                <td>By Road</td>
              </tr>
              <tr className="table-text">
                <th className="lead"><strong>Payment Mode</strong></th>
                <td>Cash On Delivery</td>
              </tr>
              <tr className="table-text">
                <th className="lead"><strong>Telephone</strong></th>
                <td>011-23873590, 42316081</td>
              </tr>
              <tr className="table-text">
                <th className="lead"><strong>Registered Address</strong></th>
                <td>2117/3,1st floor chch indara,bhagirath place,Chandani Chowk,Delhi-110006</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

     {/*----Why Us Content*----*/}

      <div className="ocean-bg border mt-4 container-fluid" data-aos="zoom-in-up" data-aos-duration="1000">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center why-card border rounded-5 my-lg-5 my-md-4 my-sm-4 my-5">
            <div className="col-lg-5 col-md-10 my-lg-5 my-md-2 my-sm-2 ps-sm-4 my-3 ps-3" data-aos="fade-right" data-aos-duration="1500">
              <div>
                <p className="display-5"><strong>Why Us</strong></p>
              </div>
              <div className="">
                <p className="why-us-content">We are one of the leading and reputed suppliers to various government and industrial units supplying quality products</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-8 my-lg-5 px-lg-5 mb-md-3 mb-sm-4 px-sm-4 mb-4 px-5" data-aos="fade-left" data-aos-duration="1500">
              <img src="images/handShaking.jpg" className="handShaking-img img-fluid rounded-4" alt=''/>
            </div>
          </div>
        </div>
      </div>


      {/*Company Products Images*/}

      <div className="d-flex justify-content-center my-5">
        <h3 className="display-6 ps-sm-5 ps-5">We sell products from various major brands</h3>
      </div>

      {/*Brand Images*/}


      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-6 d-flex justify-content-center
                    " data-aos="fade-right" data-aos-duration="1500">
            <img src="images/Philips.png" className="brand-img pt-md-2 mt-md-1 ps-lg-5" alt=''/>
          </div>
          <div className="col-md-4 col-sm-6 d-flex justify-content-center
                    " data-aos="zoom-out" data-aos-duration="1500">
            <img src="images/Comet.png" className="brand-img mt-sm-auto mt-4 mb-md-2 pe-lg-3"alt='' />
          </div>
          <div className="col-md-4 col-sm-12 d-flex justify-content-center
                    " data-aos="fade-left" data-aos-duration="1500" >
            <img src="images/Osram.png" className="brand-img mt-sm-3 mt-4 pb-md-2 pe-lg-5" alt=''/>
          </div>
        </div>
      </div>


      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-6 d-flex justify-content-center
                    " data-aos="fade-right" data-aos-duration="1500">
            <img src="images/Hmi.png" className="brand-img pt-md-2 mt-md-1 ps-lg-5" alt=''/>
          </div>
          <div className="col-md-4 col-sm-6 d-flex justify-content-center
                    " data-aos="zoom-out" data-aos-duration="1500">
            <img src="images/Torex.png" className="brand-img mt-sm-auto mt-4 pb-md-3 pe-lg-3" alt=''/>
          </div>
          <div className="col-md-4 col-sm-12 d-flex justify-content-center
                    " data-aos="fade-left" data-aos-duration="1500">
            <img src="images/Polycab.png" className="brand-img mt-sm-3 mt-4 pe-lg-5" alt=''/>
          </div>
        </div>
      </div>


      {/*Our Product Range*/}

      <div className="container-fluid mt-5 curvy-bg border">
        <div className="row range-bg my-lg-5 mx-lg-5 rounded-5 border">
          <div className="col-md-5 my-5 px-5  ms-lg-5" data-aos="flip-up" data-aos-duration="1000">
            <div id="carouselExampleRide"className="carousel slide" data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/Mountedlight.jpg"className="d-block w-100 ProductRange-img img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/Guage.jpg"className="d-block w-100 ProductRange-img img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/bulbs.jpg"className="d-block w-100 ProductRange-img img-fluid" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span aria-hidden="true"><img src="images/LeftArrow.png" className='logo-btn'/></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span aria-hidden="true"><img src="images/RightArrow.png" className='logo-btn'/></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>



       

          <div className="col-md-6 my-5 ms-lg-5" data-aos="flip-down" data-aos-duration="1000">
            <p className="display-6 ms-5"><strong>Our Product Range</strong></p>
            <div className="d-flex justify-content-start">
              <img src="images/tick.png" className="tick me-3 ms-5" />
              <p className="lead"><strong>Stockist</strong></p>
            </div>
            <div className="d-flex justify-content-start">
              <img src="images/tick.png" className="tick me-3 ms-5" />
              <p className="lead"><strong>Lugs</strong></p>
            </div>
            <div className="d-flex justify-content-start">
              <img src="images/tick.png" className="tick me-3 ms-5" />
              <p className="lead"><strong>Cable Glands</strong></p>
            </div>
            <div className="d-flex justify-content-start">
              <img src="images/tick.png" className="tick me-3 ms-5" alt='' />
              <p className="lead"><strong>Lights & Bulbs</strong></p>
            </div>
            <div className="d-flex justify-content-start">
              <img src="images/tick.png" className="tick me-3 ms-5" alt=''/>
              <p className="lead"><strong>Switchgears</strong></p>
            </div>
            <div className="d-flex justify-content-start">
              <img src="images/tick.png" className="tick me-3 ms-5" alt=''/>
              <p className="lead"><strong>Flameproof Instrument</strong></p>
            </div>
            <div className="d-flex justify-content-start">
              <img src="images/tick.png" className="tick me-3 ms-5" alt='' />
              <p className="lead"><strong>Measuring Instrument</strong></p>
            </div>
          </div>
        </div>
      </div>



      {/*Explore*/}

      <div className="d-flex justify-content-around my-4">
        <p className="display-4 mt-md-3 mt-sm-4 mt-4 explore-text"><strong>Explore</strong></p>
        <img src="images/high-quality.gif" className="gif" alt='' />
      </div>
    </>
  );
}

export default HomeHero;