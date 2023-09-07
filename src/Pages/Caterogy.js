import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Components/Style-Product.css";
import axios from "axios";
import { useState } from "react";

const Categories = () => {
  const [Categories, setCategoies] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/Categories");
      setCategoies(data);
    };
    fetchdata();
  }, []);

  return (
    <>
      <Header />

      {Categories &&
        Categories?.data.map((Categories) => (
          <div className="container my-5">
            <div className="row d-flex justify-content-center">
              <div className="col-12 product-card-container border ">
                <div className="row my-3 mx-3">
                  <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
                    <img
                      src={Categories.image}
                      className="img-fluid"
                      alt="--"
                    />
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 my-3">
                    <div>
                      <p className="display-6">{Categories.name} </p>
                    </div>
                    <div className="mb-md-5">
                      <p className="lead mt-md-4 ms-md-auto ms-2 pb-md-5">
                        <strong>{Categories.detail} </strong>
                      </p>
                    </div>

                    <div className="d-flex justify-content-end mt-lg-5 pt-lg-5 d-flex justify-content-between">
                      <h3 className=" mt-md-1">
                        Price Range:{Categories.averageRate}
                      </h3>
                      <Link to={`/product/${Categories.batch}`}>
                        <button className="btn cart-button px-5 py-2 ">
                          <strong>
                            <h5>See All</h5>
                          </strong>
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

export default Categories;
