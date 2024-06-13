import React from "react";
import "./AboutPage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <div className="mb-1 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div className="row " style={{ margin: 0, padding: 0 }}>
        <div className="image mb-1">
          <h1 className="text">ABOUT US</h1>
        </div>
        <div className="left col-6">
          <h3 className="text1">Good Reputation</h3>
          <br />
          <p className="text2">
            We at CEYLON EXECUTIVES offer a wide range of weddings suits for
            men. Whether you are the groom, the best man or a wedding guest, you
            have the opportunity to design the perfect fitting suit for
            weddings. Choose the fabric, style and details and our tailors make
            them made to measure for you. So you get to wear a suit that fully
            expresses your personality and taste. We are conveniently located in
            All our garments are tailor-made from scratch. After receiving your
            order and product information, our tailors begin working to create
            your piece. Our tailor handwrites your sizes over the fabrics before
            cutting. No garment is the same as any other.
          </p>
        </div>
        <div className="right col-6">
          <div className="image2">
            <img src="https://i.imgur.com/aSykobj.jpg" alt="" />
          </div>
        </div>
        <div className="div paragraph mb-5">
          <p className="text3">
            Choose from a range of fabrics and various details and design your
            own outfit. We guarantee the perfect fit of your tailor-made suit.
          </p>
          <p className="text4">
            You can personalize everything from the choice of fabric, to the
            buttons and pockets style, lining color, and even lapel withal of
            your garments are created based on your specific preferences, fabric
            selection and style
          </p>
          <p className="text5">
            At Ceylon Executives we rely on the expertise of our skilled tailors
            in order to deliver high quality products. In our tailoring we take
            the reliability of measurements and fit of our garments to a
            superior level.
          </p>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutPage;
