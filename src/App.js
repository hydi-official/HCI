import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Clothing from "./pages/Clothing/Clothing.js";
import NewArrivals from "./components/home/NewArrivals/NewArrivals.js";
import Miscellaneous from "./pages/Miscellaneous/Miscellaneous.js";
import Accessories from "./pages/Accessories/Accessories.js";
import Wigs from "./pages/Wigs/Wigs.js";
import Others from "./pages/Others/Others.js";
import Shop from "./pages/Shop/Shop";
import Adidas from "./pages/Brands/Adidas.js";
import Balenciaga from './pages/Brands/Balenciaga';
import Burberry from "./pages/Brands/Burberry.js";
import Dior from "./pages/Brands/Dior.js";
import Fendi from "./pages/Brands/Fendi.js";
import Fila from "./pages/Brands/Fila.js";
import Gucci from "./pages/Brands/Gucci.js";
import Hermes from "./pages/Brands/Hermes.js";
import LouisVuitton from "./pages/Brands/LouisVuitton.js";
import Nike from "./pages/Brands/Nike.js";
import Prada from "./pages/Brands/Prada.js";
import Reebok from "./pages/Brands/Reebok.js";
import Rolex from "./pages/Brands/Rolex.js";
import Supreme from "./pages/Brands/Supreme.js";
import Timberland from "./pages/Brands/Timberland.js";
import Vans from "./pages/Brands/Vans.js";
import versace from './pages/Brands/Versace';
import Zara from "./pages/Brands/Zara.js";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/color/:colorId"></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/newArrivals" element={<NewArrivals />}></Route>
        <Route path="/clothing" element={<Clothing/>}></Route>
        <Route path="/Miscellaneous" element={<Miscellaneous/>}></Route>
        <Route path="/Accessories" element={<Accessories/>}></Route>
        <Route path="/Wigs" element={<Wigs/>}></Route>
        <Route path="/Adidas" element={<Adidas/>}></Route>
        <Route path="/Balenciaga" element={<Balenciaga/>}></Route>
        <Route path="/Burberry" element={<Burberry/>}></Route>
        <Route path="/Dior" element={<Dior/>}></Route>
        <Route path="/Fendi" element={<Fendi/>}></Route>
        <Route path="/Fila" element={<Fila/>}></Route>
        <Route path="/Gucci" element={<Gucci/>}></Route>
        <Route path="/Hermes" element={<Hermes/>}></Route>
        <Route path="/LouisVuitton" element={<LouisVuitton/>}></Route>
        <Route path="/Nike" element={<Nike/>}></Route>
        <Route path="/Prada" element={<Prada/>}></Route>
        <Route path="/Reebok" element={<Reebok/>}></Route>
        <Route path="/Rolex" element={<Rolex/>}></Route>
        <Route path="/Supreme" element={<Supreme/>}></Route>
        <Route path="/Timberland" element={<Timberland/>}></Route>
        <Route path="/Vans" element={<Vans/>}></Route>
        <Route path="/Versace" element={<versace/>}></Route>
        <Route path="/Zara" element={<Zara/>}></Route>
        <Route path="/Others" element={<Others/>}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
