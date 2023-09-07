import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function Addproduct() {
  const [name, setname] = useState(" ");
  const [id, setid] = useState();
  const [price, setprice] = useState();
  const [image, setimage] = useState("");
  const [batch, setbatch] = useState("");
  const [detail, setdetail] = useState("");
  const [brand, setbrand] = useState();
  const add = (e) => {
    e.preventDefault();
    console.log("clicked");

    const fetchUser = async () => {
      const response = await axios.post("/admin/add/Product", {
        name,
        id,
        price,
        image,
        batch,
        detail,
        brand,
      });
      setname("");
      setid(0);
      setprice(0);
      setbatch("OSTC00");
      setimage("");
      setdetail("");
      setbrand("");
      console.log(response);
    };

    fetchUser();
  };
  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <h3>Add Product</h3>

          <InputContainer>
            <p>Name</p>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </InputContainer>
          <InputContainer>
            <p>Batch code</p>
            <input
              type="text"
              onChange={(e) => setbatch(e.target.value)}
              value={batch}
            />
          </InputContainer>
          <InputContainer>
            <p>detail</p>
            <input
              type="text"
              onChange={(e) => setdetail(e.target.value)}
              value={detail}
            />
          </InputContainer>
          <InputContainer>
            <p>price</p>
            <input
              type="number"
              onChange={(e) => setprice(e.target.value)}
              value={price}
            />
          </InputContainer>
          <InputContainer>
            <p>Image Url</p>
            <input
              type="text"
              onChange={(e) => setimage(e.target.value)}
              value={image}
            />
          </InputContainer>
          <InputContainer>
            <p>id</p>
            <input
              type="number"
              onChange={(e) => setid(e.target.value)}
              value={id}
            />
          </InputContainer>
          <InputContainer>
            <p>brand</p>
            <input
              type="text"
              onChange={(e) => setbrand(e.target.value)}
              value={brand}
            />
          </InputContainer>
          <Button onClick={add}>Add Product</Button>
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default Addproduct;
