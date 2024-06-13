import React, { useEffect, useState } from "react";
import DashCategory from "../components/DashCategory";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import axios from "axios";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import "./UserAdmin.css";

const CustomerAdmin = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    contact: "",
    extra: "",
    nic: "",
  });

  const [isAddCustomerModalOpen, setIsAddCustomerModalOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  // State to hold error messages for each input field
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    contact: "",
    nic: "",
  });

  const toggleAddCustomerModal = () => {
    setIsAddCustomerModalOpen(!isAddCustomerModalOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/customer")
      .then((response) => {
        console.log("API Response:", response.data);
        setCustomers(response.data.data);
        setLoading(false); // Set loading to false after data is fetched successfully
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const handleDeleteCustomer = (nic) => {
    axios
      .delete("http://localhost:8080/api/v1/customer", {
        params: {
          nic: nic,
        },
      })
      .then((response) => {
        console.log("Customer deleted successfully:", response.data);
        setCustomers((prevCustomer) =>
          prevCustomer.filter((customer) => customer.nic !== nic)
        );
      })
      .catch((error) => {
        console.error("Error deleting customer:", error);
      });
  };

  // Async function for handling form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields before submission
    const errors = {};
    if (!formValue.firstName) {
      errors.firstName = "First name is required.";
    }
    if (!formValue.lastName) {
      errors.lastName = "Last name is required.";
    }
    if (!formValue.address) {
      errors.address = "Address is required.";
    }
    if (!formValue.city) {
      errors.city = "City is required.";
    }
    if (!formValue.contact) {
      errors.contact = "Contact number is required.";
    }

    if (!formValue.nic) {
      errors.nic = "NIC is required.";
    }

    // Update the formErrors state with the validation errors
    setFormErrors(errors);

    // If there are any validation errors, stop form submission
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Combine the first name and last name to create the full name
    const fullName = `${formValue.firstName} ${formValue.lastName}`;
    // Create the customer data object
    const customerData = {
      name: fullName,
      address: formValue.address,
      city: formValue.city,
      contact: formValue.contact,
      extra: formValue.extra,
      nic: formValue.nic,
    };

    try {
      // Send the customer data using the POST method
      const response = await axios.post(
        "http://localhost:8080/api/v1/customer",
        customerData
      );
      console.log("Customer added successfully:", response.data);

      // Update the customers state with the new customer data
      setCustomers((prevCustomers) => [...prevCustomers, response.data]);
      // Close the modal after successful addition
      toggleAddCustomerModal();
      // Reset the form fields after successful addition
      setFormValue({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        contact: "",
        extra: "",
        nic: "",
      });
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  // Add the onChange handlers for each input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="mb-3 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div className="row flex-grow-1">
        <div className="col-lg-3 ms-5">
          <DashCategory></DashCategory>
        </div>
        <div className="col-lg-8">
          <div className="upper">
            <div className="main mt-5">
              <h3 className="header">CUSTOMERS</h3>
              <MDBBtn onClick={toggleAddCustomerModal}>Add Customer</MDBBtn>
              <MDBModal show={isAddCustomerModalOpen} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Add Customer</MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleAddCustomerModal}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      {/* Add your form or content for adding a new user here */}
                      <form onSubmit={handleFormSubmit} id="productForm">
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example1"
                              label="First name"
                              name="firstName"
                              value={formValue.firstName}
                              onChange={handleChange}
                            />

                            {formErrors.firstName && (
                              <div className="text-danger">
                                {formErrors.firstName}
                              </div>
                            )}
                          </MDBCol>
                          <MDBCol>
                            <MDBInput
                              id="form3Example2"
                              label="Last name"
                              name="lastName"
                              value={formValue.lastName}
                              onChange={handleChange}
                            />
                            {formErrors.lastName && (
                              <div className="text-danger">
                                {formErrors.lastName}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              textarea
                              id="form3Example7"
                              rows={4}
                              label="Address"
                              name="address"
                              value={formValue.address}
                              onChange={handleChange}
                            />
                            {formErrors.address && (
                              <div className="text-danger">
                                {formErrors.address}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example2"
                              name="city"
                              label="City"
                              value={formValue.city}
                              onChange={handleChange}
                            />
                            {formErrors.city && (
                              <div className="text-danger">
                                {formErrors.city}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example20"
                              type="number"
                              label="Contact Number"
                              name="contact"
                              value={formValue.contact}
                              onChange={handleChange}
                            />
                            {formErrors.contact && (
                              <div className="text-danger">
                                {formErrors.contact}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              textarea
                              id="form3Example73"
                              rows={4}
                              label="Extra Message"
                              name="extra"
                              value={formValue.extra}
                              onChange={handleChange}
                            />
                            {formErrors.extra && (
                              <div className="text-danger">
                                {formErrors.extra}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-4">
                          <MDBCol>
                            <MDBInput
                              id="form3Example20"
                              label="NIC"
                              name="nic"
                              value={formValue.nic}
                              onChange={handleChange}
                            />
                            {formErrors.nic && (
                              <div className="text-danger">
                                {formErrors.nic}
                              </div>
                            )}
                          </MDBCol>
                        </MDBRow>
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn
                        color="secondary"
                        onClick={toggleAddCustomerModal}
                      >
                        Close
                      </MDBBtn>
                      <MDBBtn type="submit" form="productForm">
                        Save changes
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
              {/* Rest of the table and other content */}
              <div className="table-container">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">City</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Message</th>
                      <th scope="col">NIC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.nic}>
                        <th scope="row">{customer.customerId}</th>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.city}</td>
                        <td>{customer.contact}</td>
                        <td>{customer.extra}</td>
                        <td>{customer.nic}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteCustomer(customer.nic)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CustomerAdmin;
