import React from "react";
import NavBar from "../components/NavBar";
import Slides from "../components/Slides";
import HomeCards from "../components/HomeCards";
import Footer from "../components/Footer";
import ShopNowCard from "../components/ShopNowCard";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <NavBar></NavBar>
      </div>

      <div>
        <Slides></Slides>
      </div>
      <div>
        <HomeCards></HomeCards>
      </div>

      <div>
        <ShopNowCard></ShopNowCard>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomePage;
