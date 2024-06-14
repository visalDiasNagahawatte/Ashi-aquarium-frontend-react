import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#0a4275" }}
      >
        <MDBContainer className="p-4 pb-0 ">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://web.facebook.com"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 : All rights reserved. Design by{" "}
          <a className="text-white">Buddika Prasanna</a>
        </div>
      </MDBFooter>
    </div>
  );
}
