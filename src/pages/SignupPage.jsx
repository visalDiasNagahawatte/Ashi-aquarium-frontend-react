import React, { useState } from "react";
import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export default function SignupPage() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState("");

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const navigateTo = useNavigate(); // Get the history object

  const handleSignup = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      toast.error("Logout first", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Exit the function early, don't proceed with signup
    }

    // Combine first name and last name
    const userName = `${formValue.firstName} ${formValue.lastName}`;

    // Prepare data object to send
    const data = {
      userName,
      email: formValue.email,
      password: formValue.password,
    };

    // Call the API to send data to the server
    sendSignupData(data);
  };

  function sendSignupData(data) {
    axios
      .post("http://localhost:8080/api/v1/user/signup", data)
      .then((response) => {
        console.log(response.data);
        navigateTo("/login");
      })
      .catch((error) => {
        console.error(error);

        // Check for specific error types or status codes
        if (error.response) {
          // Axios received a response, but it's an error response with a status code
          const { status, data } = error.response;

          // Handle different error statuses and render appropriate text or UI components
          if (data.code === 500) {
            setFormErrors("email already exists");
          }
        }
      });
  }

  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSignup}>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                name="firstName"
                id="validationCustom01"
                required
                label="First name"
                value={formValue.firstName}
                onChange={onChange}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                name="lastName"
                id="validationCustom02"
                required
                label="Last name"
                value={formValue.lastName}
                onChange={onChange}
              />
            </MDBCol>
          </MDBRow>
          {formErrors && <div className="text-danger">{formErrors}</div>}
          <MDBInput
            className="mb-4"
            name="email"
            type="email"
            id="validationCustom03"
            required
            label="Email address"
            value={formValue.email}
            onChange={onChange}
          />

          <MDBInput
            className="mb-4"
            name="password"
            type="password"
            id="validationCustom04"
            required
            label="Password"
            value={formValue.password}
            onChange={onChange}
          />
          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form3Example5"
            label="Subscribe to our newsletter"
            defaultChecked
          />
          <MDBBtn type="submit" className="mb-4" block>
            Sign up
          </MDBBtn>
          <div className="text-center">
            <p>
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </form>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}
