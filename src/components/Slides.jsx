import Carousel from "react-bootstrap/Carousel";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Slides() {
  return (
    <div className="mb-6">
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100 "
            src="/images/slides/1.jpg"
            style={{ height: "570px", objectFit: "cover" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Discover Stunning Fish</h3>
            <p>
              Find a wide range of vibrant and unique fish species that will
              bring life and color to your aquarium.
            </p>

            <Link to={"/about"}>
              <MDBBtn className="text-dark mb-3" color="light">
                LEARN MORE
              </MDBBtn>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/images/slides/2.jpg"
            style={{ height: "570px", objectFit: "cover" }}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Discover Aquatic Beauty</h3>
            <p>
              Add elegance and charm to your water world with our diverse
              selection of beautiful fish
            </p>

            <Link to={"/about"}>
              <MDBBtn className="text-dark mb-3" color="light">
                LEARN MORE
              </MDBBtn>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slides/3.jpg"
            style={{ height: "570px", objectFit: "cover" }}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Limited-Time Offers</h3>
            <p>
              Explore our limited-time offers and save big on your favorite
              fish. Buy now before it's too late!
            </p>

            <Link to={"/about"}>
              <MDBBtn className="text-dark mb-3" color="light">
                LEARN MORE
              </MDBBtn>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slides;
