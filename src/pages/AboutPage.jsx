import React from 'react';
import './AboutPage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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
            We at Ashi Aquarium, we offer a wide range of high-quality aquarium
            products and services, including fish, plants, and accessories.
            Whether you're setting up your first tank or enhancing your aquatic
            environment, our platform has everything you need. Choose from our
            extensive catalog, and our team will carefully prepare and ship your
            items to ensure they arrive in perfect condition. Create your unique
            underwater paradise with Ashi Aquarium.No Aquarium is the same as
            any other.
          </p>
        </div>
        <div className="right col-6">
          <div className="image2">
            <img
              src="https://i.imghippo.com/files/7alhJ1718349611.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="div paragraph mb-5">
          <p className="text3">
            At Ashi Aquarium, choose from a range of fish and various items to
            design your own fish tank. We guarantee the perfect items to create
            your unique underwater paradise. Select from our extensive catalog,
            and our team will carefully prepare and ship your order to ensure it
            arrives in perfect condition. Enhance your aquatic environment with
            Ashi Aquarium.
          </p>
          <p className="text5">
            Select from our extensive catalog,and our team will carefully
            prepare and ship your order to ensure it arrives in perfect
            condition. Enhance your aquatic environment with Ashi Aquarium.
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
