import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MDBBtn, MDBBadge, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "react-use-cart";

function NavBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const { emptyCart } = useCart(); // Access the items and removeItem functions from useCart hook

  // Event handler for logout
  const handleLogout = () => {
    // Dispatch the logout action to set isLoggedIn to false
    dispatch(logout());
    emptyCart();
    // Clear isLoggedIn from local storage
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div className="sticky-lg-top">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="/images/AQ logo.png"
              width="40"
              height="40"
              className="d-inline-block align-center"
            />{" "}
            Ashi Aquarium
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/renthomepage01">Buy</Nav.Link>

              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/weddings">Events</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>

            <Link to={"/cart"}>
              <a
                className="d-inline p-4 me-2 border rounded py-1 px-3 nav-link d-flex align-items-center"
                target="_blank"
              >
                <i className="fas fa-shopping-cart m-1 me-md-2"></i>
                <p className="d-none d-md-block mb-0">My cart</p>
              </a>
            </Link>

            <Form className="d-flex ">
              <div>
                {/* Render Logout button when isLoggedIn is true */}
                {isLoggedIn && (
                  <Link to={"/renthomepage01"}>
                    <MDBBtn onClick={handleLogout} className="me-2">
                      Logout
                    </MDBBtn>
                  </Link>
                )}
              </div>

              {/* Render Log In button when isLoggedIn is false */}
              {!isLoggedIn && (
                <Link to={"/login"}>
                  <MDBBtn className="me-2">Login</MDBBtn>
                </Link>
              )}

              <Link to={"/signup"}>
                <MDBBtn className="me-2">Signup</MDBBtn>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
