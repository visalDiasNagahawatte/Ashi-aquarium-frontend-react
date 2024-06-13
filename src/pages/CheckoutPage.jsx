import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./CheckoutPage.css";
import axios from "axios";
import { useCart } from "react-use-cart";

function CheckoutPage() {
  const [customerData, setCustomerData] = useState(null);
  const [customerFound, setCustomerFound] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    nic: "",
    contact: "",
    extra: "",
    waistSize: "",
    hipSize: "",
    pantLength: "",
    neckSize: "",
    sleeveLength: "",
    jacketSize: "",
    additionalInfo: "",
  });

  const createNewCustomer = async (customerDTO) => {
    try {
      // POST the NIC to create a new customer
      await axios.post("http://localhost:8080/api/v1/customer", customerDTO);

      // Fetch the newly created customer's data to get the customerId
      const newCustomerResponse = await axios.get(
        "http://localhost:8080/api/v1/customer/find",
        {
          params: {
            nic: customerDTO.nic,
          },
        }
      );

      console.log("New Customer Data:", newCustomerResponse.data);

      // Update the state with the newly created customer's data and customerId
      const newCustomerData = newCustomerResponse.data.data;
      setCustomerData(newCustomerData);
      setCustomerId(newCustomerData.customerId);
      setCustomerFound(true);
    } catch (error) {
      console.error("Error creating new customer:", error);
      setCustomerFound(false);
      setCustomerData(null);
      setCustomerId(null);
    }
  };

  const handleNICChange = async (event) => {
    const nic = event.target.value;

    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/customer/find",
        {
          params: {
            nic: nic,
          },
        }
      );
      console.log("Customer Data:", response.data);

      const customerData = response.data.data;
      if (customerData) {
        setCustomerData(customerData);
        setCustomerFound(true);
        setCustomerId(customerData.customerId);
        // Extract the first name and last name from the full name
        const fullName = customerData.name;
        const [firstName, lastName] = fullName.split(" ");

        // Extract measurement data
        const measurementData = customerData.measurementDTO;
        const {
          waistSize,
          hipSize,
          pantLength,
          neckSize,
          sleeveLength,
          jacketSize,
          additionalInfo,
        } = measurementData;

        // Update the state with the first name, last name, and other form fields
        setFormValue({
          firstName,
          lastName,
          address: customerData.address,
          city: customerData.city,
          nic: customerData.nic,
          contact: customerData.contact,
          extra: customerData.extra,
          waistSize,
          hipSize,
          pantLength,
          neckSize,
          sleeveLength,
          jacketSize,
          additionalInfo,
        });
      } else {
        // setCustomerFound(false);
        // setCustomerData(null);
        // setCustomerId(null); // Clear the customerId when the customer is not found

        // Autofill the form with the NIC entered by the customer
        setFormValue((prevFormValue) => ({
          ...prevFormValue,
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          nic: nic,
          contact: "",
          extra: "",
          waistSize: "",
          hipSize: "",
          pantLength: "",
          neckSize: "",
          sleeveLength: "",
          jacketSize: "",
          additionalInfo: "",
        }));
        // Create a new customer and get the new customerId
        const newCustomerDTO = {
          address: "",
          city: "",
          contact: "",
          customerId: 0,
          extra: "",
          measurementDTO: {
            extra: "",
            hipSize: "",
            jacketSize: "",
            measurementId: 0,
            neckSize: "",
            pantLength: "",
            sleeveLength: "",
            waistSize: "",
          },
          name: "",
          nic: nic,
        };

        await createNewCustomer(newCustomerDTO);
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setCustomerData(null);
      setCustomerFound(false);
      setCustomerId(null);
      setFormValue({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        nic: "",
        contact: "",
        extra: "",
        waistSize: "",
        hipSize: "",
        pantLength: "",
        neckSize: "",
        sleeveLength: "",
        jacketSize: "",
        additionalInfo: "",
      });
    }
  };

  const handleNICSubmit = async () => {
    if (formValue.nic.trim() !== "") {
      // Fetch customer data based on the entered NIC
      await handleNICChange({ target: { value: formValue.nic } });
    } else {
      alert("Please enter a valid NIC.");
    }
  };

  // Handle changes to the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleNICInputChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const { items, totalItems, cartTotal } = useCart();

  // Function to handle the "Place Order" button click
  const handlePlaceOrder = async () => {
    try {
      // Prepare the lineItemDTOS array from the cart items
      const lineItemDTOS = items.map((item) => ({
        quantity: item.quantity,
        totalPrice: item.quantity * item.price,
        productDTO: {
          productId: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          stockQty: item.stockQty,
          imgUrl: item.imgUrl,
          inStock: item.inStock,
        },
      }));

      // Convert cartTotal to a numeric type (float) before sending it in the orderDTO
      const numericCartTotal = parseFloat(cartTotal);

      // Prepare the orderDTO object
      const orderDTO = {
        cartDTO: {
          cartId: 0, // Update with the appropriate cartId if available
          lineItemDTOS: lineItemDTOS,
          orderId: 0, // Update with the appropriate orderId if available
        },
        customerDTO: {
          name: formValue.firstName + " " + formValue.lastName,
          address: formValue.address,
          city: formValue.city,
          nic: formValue.nic,
          contact: formValue.contact,
          customerId: customerId || 0, // Update with the customerId if available
          extra: formValue.extra,
          measurementDTO: {
            hipSize: formValue.hipSize,
            waistSize: formValue.waistSize,
            jacketSize: formValue.jacketSize,
            measurementId: 0, // Update with the appropriate measurementId if available
            neckSize: formValue.neckSize,
            pantLength: formValue.pantLength,
            sleeveLength: formValue.sleeveLength,
            extra: formValue.additionalInfo,
          },
          name: formValue.firstName + " " + formValue.lastName,
          nic: formValue.nic,
        },
        date: new Date().toISOString(),
        duration: "some_duration_value",
        orderId: 0, // Update with the appropriate orderId if available
        subTotal: numericCartTotal,
      };

      // If the customerId is available, add it to the orderDTO
      if (customerId) {
        orderDTO.customerDTO.id = customerId;
      }

      // Log the orderDTO before making the POST request
      console.log("Order DTO:", orderDTO);

      // Make the POST request to send orderDTO to the backend
      await axios.post("http://localhost:8080/api/v1/order", orderDTO);

      // Optionally, you can show a success message or redirect the user after successful order placement
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      // Check if the backend returned an error message
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.error("Backend error message:", error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="mb-3 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div>
        {/* <!-- cart + summary --> */}
        <section className="bg-light my-5">
          <div className="ms-4">
            <MDBRow className="mb-4">
              <h5>Submit Your NIC</h5>
              <MDBCol className="col-3 mb-1">
                <MDBInput
                  id="1"
                  label="Enter NIC"
                  name="nic"
                  value={formValue.nic}
                  onChange={handleNICInputChange}
                />
              </MDBCol>
              <MDBCol>
                <button className="btn btn-primary" onClick={createNewCustomer}>
                  Submit NIC
                </button>

                {!customerFound && (
                  <div className="text-danger">
                    {customerData === null
                      ? "Error fetching customer data."
                      : "Customer not found."}
                  </div>
                )}
              </MDBCol>
            </MDBRow>
          </div>
          <div className="container">
            <div className="row">
              {/* <!-- form --> */}
              <div className="shadow-0 border bill col-lg-4 me-5">
                <form onSubmit={(e) => e.preventDefault()}>
                  <h3 className="bill-heading">Billing Information</h3>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        id="2"
                        label="First name"
                        name="firstName"
                        value={formValue.firstName}
                        onChange={handleChange}
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput
                        id="3"
                        label="Last name"
                        name="lastName"
                        value={formValue.lastName}
                        onChange={handleChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    id="4"
                    label="Address"
                    name="address"
                    value={formValue.address}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="5"
                    label="City"
                    name="city"
                    value={formValue.city}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    type="email"
                    id="6"
                    label="NIC Number"
                    name="nic"
                    value={formValue.nic}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    type="tel"
                    id="7"
                    label="Phone"
                    name="contact"
                    value={formValue.contact}
                    onChange={handleChange}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    textarea
                    id="8"
                    rows={4}
                    label="Additional information"
                    name="extra"
                    value={formValue.extra}
                    onChange={handleChange}
                  />
                </form>
              </div>
              <div className="shadow-0 border measurements col-lg-4 me-4">
                <form onSubmit={(e) => e.preventDefault()}>
                  <h3 className="measurements-heading">Your Measurements</h3>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        id="9"
                        label="Waist Size"
                        name="waistSize"
                        value={formValue.waistSize}
                        onChange={handleChange}
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput
                        id="10"
                        label="Hip Size"
                        name="hipSize"
                        value={formValue.hipSize}
                        onChange={handleChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    id="11"
                    label="Pant Length"
                    name="pantLength"
                    value={formValue.pantLength}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="12"
                    label="Dress Shirt Neck Size"
                    name="neckSize"
                    value={formValue.neckSize}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="13"
                    label="Dress Shirt Sleeve Length"
                    value={formValue.sleeveLength}
                    name="sleeveLength"
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    id="14"
                    label="Suit Jacket Size"
                    name="jacketSize"
                    value={formValue.jacketSize}
                    onChange={handleChange}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    textarea
                    id="15"
                    rows={4}
                    label="Additional information"
                    name="additionalInfo"
                    value={formValue.additionalInfo}
                    onChange={handleChange}
                  />
                </form>
              </div>
              {/* <!-- form --> */}
              {/* <!-- summary --> */}
              <div className="col-lg-3 ms-4">
                <div className="card shadow-0 border">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2"></p>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2 fw-bold">Rs.{cartTotal} </p>
                    </div>

                    <div className="mt-3">
                      <button
                        onClick={handlePlaceOrder}
                        className="btn btn-success w-100 border mt-2"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- summary --> */}
            </div>
          </div>
        </section>
        {/* <!-- cart + summary --> */}
        <section>
          <div className="container my-5"></div>
        </section>
      </div>

      <div>
        <Footer> </Footer>
      </div>
    </div>
  );
}

export default CheckoutPage;
