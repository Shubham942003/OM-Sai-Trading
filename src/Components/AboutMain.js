import '../Components/Style-AboutMain.css';
import AOS from "aos";
import "aos/dist/aos.css";
const AboutMain = () => {
  AOS.init();
  return (
    <>
      <div className="container About-background" data-aos="zoom-in" data-aos-duration="500">
        <div className="pt-3 mx-5">
          <p className="display-6">
            <strong>About Om Sai Trading Co.</strong>
            <hr className="border border-dark" />
          </p>
        </div>
        <div className="mx-5" data-aos="zoom-in-up" data-aos-duration="1000">
          <p className="lead pb-3" data-aos="zoom-in-up"><strong>
            We feel pleasure in introducing ourselves as one of the leading and reputed suppliers to various govt. and industrial units. Om sai trading co. works on business to business model. we work with multiple reputed brands like Philips,Polycab,Bajaj electrics and several others to provide best quality products possible to our customers.
          </strong></p>
        </div>

      <div className="pt-3 mx-5" data-aos="zoom-in-up">
        <h3 className="heading-underline">The Beginning</h3>
      </div>
      <div className="mx-5" data-aos="zoom-in-up" data-aos-duration="1000">
          <p className="lead pb-3"><strong>
          Om Sai Trading co. started with its humble beginning in 2010, with a small capital and funding we started opened this business in Chandani Chowk Delhi,India,with dedication and handwork of all the members involved on sai trading co. started to grow and with the growth the needed to be handled properly. So in 2019 another branch of our company was opened.
          </strong></p>
        </div>


        <div className="pt-3 mx-5" data-aos="zoom-in-up" data-aos-duration="1000">
        <h3 className="heading-underline">Om Sai Trading Co. Today</h3>
      </div>
      <div className="mx-5" data-aos="zoom-in-up" data-aos-duration="1000">
          <p className="lead pb-3"><strong>
          Today Om sai trading co. is one of the largest suppliers,supplying multiple products (mainly components related to electricity) to all types of large organization: govt., private, and public.
          </strong></p>
        </div>


        <div className="pt-3 mx-5">
        <h3 className="heading-underline">What We Offer</h3>
      </div>
      <div className="mx-5" data-aos="zoom-in-up" data-aos-duration="1000">
          <p className="lead pb-3"><strong>
          We offer various types of products from a wide range of category.
          </strong></p>
          <ul>
      <li className="lead"><strong>Switchgears</strong></li>
      <li className="lead"><strong>Stockist</strong></li>
      <li className="lead"><strong>Wires & Cables</strong></li>
      <li className="lead"><strong>Panel accessories</strong></li>
      <li className="lead"><strong>Electrical accessories</strong></li>
      <li className="lead"><strong>Measuring instruments</strong></li>
      <li className="lead"><strong>Electrical insulation</strong></li>
      <li className="lead"><strong>Lightning accessories</strong></li>
      {/* <li className="lead"><strong>Flame proof electronics</strong></li>
      <li className="lead"><strong>Safety equipments</strong></li>
      <li className="lead"><strong>HT & LT Line Material</strong></li>
      <li className="lead"><strong>Lugs & Cables Glands</strong></li>
      <li className="lead"><strong>Electronics & Instrument Items</strong></li> */}
      <p className="lead"><strong>And More ...</strong></p>
    </ul>
        </div>

        {/* <div className="pt-3 mx-5" data-aos="zoom-in-up" data-aos-duration="1000">
        <h3 className="heading-underline">Our Values</h3>
      </div>
     
      <div className="mx-5 pb-3 mb-5" data-aos="zoom-in-up" data-aos-duration="1000">
          <p className="lead pb-3"><strong>
          For us our company is not just business, it is part of our family. We strive to be a community not just a company and help other businesses to grow and function properly by providing them with best quality of products our five core values:
          </strong></p>
          <p className="lead">
      <h5>1. Quality:</h5> <strong>We always strive to provide the best quality of not just products but also customer experience.</strong>
    </p>
    <p className="lead">
      <h5>2. Trust:</h5> <strong>We believe that a customer trusts a business before buying its product and companies should respect their customer's trust</strong>
    </p>
    <p className="lead">
     <h5> 3. Commitment to customers:</h5> <strong>We always strive to provide the best experience and customer care to our customer.</strong>
    </p>
    <p className="lead">
      <h5>4. Diversity:</h5> <strong>We do not discriminate our employees or our customers on any basis, for us everyone involved with our company is equal.</strong>
    </p>
    <p className="lead">
      <h5>5. Accountability:</h5> <strong>Tho it is very rare for us to deliver any faulty product we always accept our mistake and try our best to correct it in order to satisfy our customers.</strong>
    </p>

        </div> */}

      </div>
    </>
  );
}

export default AboutMain;