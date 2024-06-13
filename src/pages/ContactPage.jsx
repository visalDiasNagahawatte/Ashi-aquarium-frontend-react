import React from "react";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div>
      <div className="mb-5 sticky-lg-top">
        <NavBar></NavBar>
      </div>

      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="md">
              <div>
                <p>
                  <b>Contact information</b> <br />
                  <br />
                  <b> email :</b> info@ceylonexecutives.com.lk
                </p>{" "}
                <p>
                  <b>Address:</b> No: 666, Old Galle Road, Horethuduwa,
                  Moratuwa, Sri Lanka
                </p>
                <p>
                  <b>Hot line :</b> 0779293915
                </p>
              </div>
            </MDBCol>
            <MDBCol>
              <img
                src="/images/ce_map.png"
                alt=""
                style={{ maxWidth: "500px" }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="fixed-bottom">
        <Footer></Footer>
      </div>
    </div>
  );
}
