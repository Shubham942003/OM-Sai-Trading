import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "../Components/Style-Product.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [Product, setProducts] = useState(null);
  const url = window.location.href;
  const lastPart = url.substring(url.lastIndexOf("/") + 1);
  console.log(lastPart);

  useEffect(() => {
    const fetchdata = async () => {
      console.log("Executed");
      const data = await axios.get(`/products/${lastPart}`);
      console.log(data);
      setProducts(data);
    };
    fetchdata();
  }, []);

  return (
    <>
      <Header />
    
      {Product &&
        Product?.data.map((Product) => (
          <div className="container my-4">
            <div className="row d-flex justify-content-center">
              <div className="col-12 product-card-container border ">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-3 col-md-4 col-8 d-flex justify-content-center">
                    <img
                      src={Product.image}
                      className="img-fluid px-lg-4 py-lg-5 px-md-2 py-md-5 py-3 px-sm-5"
                      alt="--"
                    />
                  </div>
                  <div className="col-lg-8 col-md-7 col-sm-12 mt-md-4">
                    <div className="my-4">
                      <h3 className="ps-md-auto ps-2 pt-1">{Product.name} </h3>
                    </div>
                    <div className="mt-5">
                      <p className="ps-md-auto ps-2 lead">
                        <strong>Brand Name:{Product.brand}</strong>{" "}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="lead ps-md-auto ps-2">
                        <strong>Category: {Product.batch}</strong>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h4 className=" pt-md-3">Approx Price:{Product.price}</h4>
                      <Link
                  to="/interested"
                >
<button className="btn my-md-3 cart-button my-3 px-5 py-2" onClick={console.log("done")}>
                        <strong>Order</strong>
                      </button>
                </Link>
                      
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </>
  );
};

export default Products;
