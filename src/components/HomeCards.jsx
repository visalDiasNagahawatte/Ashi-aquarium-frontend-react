import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Homecards() {
  return (
    <div className="mb-5 ">
      <MDBRow className="g-4 d-flex justify-content-center">
        <MDBCol lg="2" md="4">
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/1.jpeg"
              alt="..."
              position="top"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBCardTitle>Betta Fish</MDBCardTitle>
              <MDBCardText>
                Add a touch of elegance to your aquarium with Betta fish,
                celebrated for their breathtaking colors and flowing fins. These
                beautiful and low-maintenance fish are perfect for both beginner
                and experienced fish keepers looking to enhance their tank's
                aesthetic.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="4">
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/2.jpg"
              alt="..."
              position="top"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBCardTitle> Goldfish</MDBCardTitle>
              <MDBCardText>
                Discover the timeless charm of goldfish, available in a wide
                range of types that are suitable for all aquariums. From the
                classic common goldfish to the elegant fantail, these hardy and
                beautiful fish make a delightful addition to any tank.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="4">
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/3.jpg"
              alt="..."
              position="top"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBCardTitle>Tropical Fish</MDBCardTitle>
              <MDBCardText>
                Dive into the world of tropical fish, featuring a stunning
                variety of colorful and vibrant species. Perfect for bringing
                dynamic beauty and life to any aquarium, these tropical
                treasures are sure to captivate both novice and experienced
                aquarists
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="4">
          <MDBCard className="h-100">
            <MDBCardImage
              src="/images/cards/4.jpg"
              alt="..."
              position="top"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <MDBCardBody style={{ textAlign: "center" }}>
              <MDBCardTitle>Koi</MDBCardTitle>
              <MDBCardText>
                Experience the mesmerizing allure of Koi fish, known for their
                vibrant colors and graceful presence. Ideal for outdoor ponds,
                these stunning fish not only add visual appeal but also bring
                tranquility and beauty to any garden or water feature.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
