import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import WeddingPage from "./pages/WeddingPage";
import SignupPage from "./pages/SignupPage";
import ItemInfoPage from "./pages/ItemInfoPage";
import RentHomePage01 from "./pages/RentHomePage01";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CartProvider } from "react-use-cart";
import CheckoutPage from "./pages/CheckoutPage";
import UserAdmin from "./Admin/pages/UserAdmin";
import ProductAdmin from "./Admin/pages/ProductAdmin";
import OrderAdmin from "./Admin/pages/OrderAdmin";
import CategoryAdmin from "./Admin/pages/CategoryAdmin";
import CustomerAdmin from "./Admin/pages/CustomerAdmin";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <CartProvider>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/renthomepage01" element={<RentHomePage01 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/weddings" element={<WeddingPage />} />
            <Route path="/item/:title" element={<ItemInfoPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/useradmin" element={<UserAdmin />} />
            <Route path="/productadmin" element={<ProductAdmin />} />
            <Route path="/orderadmin" element={<OrderAdmin />} />
            <Route path="/categoryadmin" element={<CategoryAdmin />} />
            <Route path="/customeradmin" element={<CustomerAdmin />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </React.StrictMode>
  </CartProvider>,
  document.getElementById("root")
);
