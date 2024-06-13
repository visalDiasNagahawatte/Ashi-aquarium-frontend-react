import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function WeddingPage() {
  return (
    <div>
      <div className="mb-3 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div>
        <h2 className="text-center text-primary-emphasis text-bg-secondary p-3 text-white">
          GALLERY
        </h2>
      </div>
      <div>
        <MDBRow>
          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <img
              src="/images/gallery/1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="/images/gallery/2.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <img
              src="/images/gallery/11.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <img
              src="/images/gallery/10.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <img
              src="/images/gallery/16.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </MDBCol>
          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <img
              src="/images/gallery/3.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <img
              src="/images/gallery/4.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="/images/gallery/9.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <img
              src="/images/gallery/13.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </MDBCol>
          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <img
              src="/images/gallery/5.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <img
              src="/images/gallery/6.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <img
              src="/images/gallery/7.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <img
              src="/images/gallery/12.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <img
              src="/images/gallery/8.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </MDBCol>
          <MDBCol lg={4} className="mb-4 mb-lg-0"></MDBCol>
          <MDBCol lg={4} className="mb-4 mb-lg-0"></MDBCol>
          <MDBCol lg={4} className="mb-4 mb-lg-0"></MDBCol>
        </MDBRow>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
