import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Products";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Error from "./Pages/Error.js";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ContactForm2 from "./Components/ContactForm2";
import Categories from "./Pages/Caterogy";
import AddCategorie from "./Pages/AddCategory";
import Addproduct from "./Pages/Addproduct";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/contactus" element={<ContactForm2 />} />
          <Route path="/product/:categoryName" element={<Product />} />
          <Route exact path="/admin/Categorie/add" element={<AddCategorie />} />
          <Route exact path="/interested" element={<ContactForm/>}/>
          <Route exact path="/product/add" element={<Addproduct />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
