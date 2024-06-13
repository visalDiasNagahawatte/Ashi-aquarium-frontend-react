import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "react-use-cart";
import axios from "axios";

function ItemInfoPage() {
  const { title } = useParams(); // Access the id parameter from the URL
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initialize the quantity state with 1
  const [rentalDuration, setRentalDuration] = useState("05 Days"); // Initialize the rental duration state with the default value

  // Use the useSelector hook to access the isLoggedIn state from the Redux store
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Use the authentication context to check if the user is logged in

  const originalTitle = title.replace(/%|-|20/g, " ");
  console.log(originalTitle);
  // Use the useCart hook to access cart functionality
  const { addItem, items, emptyCart } = useCart();

  useEffect(() => {
    // Fetch item data from the backend API based on the item's title
    axios
      .get("http://localhost:8080/api/v1/product/find", {
        params: {
          title: title, // Pass the title as a parameter in the request body
        },
      })
      .then((response) => {
        console.log(response.data);
        const selectedItem = response.data.data; // Get the item data from the 'data' property of the response
        setSelectedItem(selectedItem);
        console.log(selectedItem);
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, []); // Use originalTitle here, assuming it holds the value of the title you want to fetch

  // Check if selectedItem is not defined yet (e.g., while fetching the data)
  if (!selectedItem) {
    console.log("Loading...");
    // You can return a loading state or message here
    return <div>Loading...</div>;
  }

  // Event handlers to handle quantity change
  const handleIncrement = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRentalDurationChange = (event) => {
    setRentalDuration(event.target.value);
  };

  const itemInCart = items.find((item) => item.title === selectedItem.title);

  // Event handler to add the selected item to the cart
  const handleAddToCart = () => {
    const itemToAdd = {
      id: selectedItem.productId,
      title: selectedItem.title,
      price: selectedItem.price,
      rentalDuration: rentalDuration,
      image: selectedItem.imgUrl,
    };

    if (itemInCart) {
      // Item is already in the cart, enable the button again
      console.log("Item is already in the cart");
    } else {
      // Item is not in the cart, add it and disable the button
      addItem(itemToAdd, quantity);
      console.log("Item added to the cart");
    }
  };

  return (
    <div>
      <div className="mb-1 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div>
        <section class="py-5">
          <div class="container">
            <div class="row gx-5">
              <aside class="col-lg-6">
                <div class=" mb-3 d-flex justify-content-center">
                  <a
                    data-fslightbox="mygalley"
                    class="rounded-4"
                    target="_blank"
                    data-type="image"
                    href={selectedItem.imgUrl}
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100vh",
                        margin: "auto",
                      }}
                      class="rounded-4 fit"
                      src={selectedItem.imgUrl}
                    />
                  </a>
                </div>

                {/* <!-- thumbs-wrap.// -->
        <!-- gallery-wrap .end// --> */}
              </aside>
              <main class="col-lg-6">
                <div class="ps-lg-3">
                  <h4 class="title text-dark">{selectedItem.title}</h4>
                  <div class="d-flex flex-row my-3">
                    {/* <div class="text-warning mb-1 me-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <span class="ms-1">4.5</span>
                    </div> */}

                    {selectedItem.inStock ? (
                      <span class="text-success ms-2">In stock</span>
                    ) : (
                      <span class="text-danger ms-2">Out of stock</span>
                    )}
                  </div>
                  <div class="mb-3">
                    <span class="h5">Rs. {selectedItem.price}/-</span>
                    {/* <span class="text-muted"> per week</span> */}
                    <div class="mt-2">
                      {/* <span class="h5"> Includes: Jacket & Pant</span> */}
                    </div>
                  </div>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {selectedItem.description}
                  </p>
                  <div class="row">
                    <dt class="col-3">For Young Fish:</dt>
                    <dd class="col-9">No additional fee</dd>

                    <dt class="col-3">For Medium Grown:</dt>
                    <dd class="col-9">Rs. 500/- additional fee</dd>

                    <dt class="col-3">For Fully Grown:</dt>
                    <dd class="col-9">Rs. 1000/- additional fee</dd>
                  </div>
                  <hr />
                  <div class="row mb-3">
                    <div class="col-md-4 col-6 mb-3 ">
                      <label class="mb-2 d-block">Quantity</label>
                      <div class="input-group mb-3 " style={{ width: "170px" }}>
                        <button
                          class="btn btn-white border border-secondary px-3 "
                          type="button"
                          id="button-addon1"
                          data-mdb-ripple-color="dark"
                          onClick={handleDecrement}
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          class="form-control text-center border border-secondary"
                          placeholder="1"
                          value={quantity}
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <button
                          class="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon2"
                          data-mdb-ripple-color="dark"
                          onClick={handleIncrement}
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-4 col-6">
                      <label class="mb-2">Size of fish</label>
                      <select
                        class="form-select border border-secondary"
                        style={{ height: "35px" }}
                        value={rentalDuration}
                        onChange={handleRentalDurationChange}
                      >
                        <option> Young Fish</option>
                        <option>Medium Grown</option>
                        <option>Fully Grown</option>
                      </select>
                    </div>
                  </div>
                  {isLoggedIn ? (
                    // If the user is logged in, show the add to cart button
                    <button
                      type="button"
                      className={`btn ${
                        itemInCart ? "btn-success" : "btn-primary"
                      } shadow-0`}
                      onClick={handleAddToCart}
                      disabled={!selectedItem.inStock || itemInCart}
                    >
                      <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                    </button>
                  ) : (
                    // If the user is not logged in, show a link to the login page
                    <Link to="/login">Log in to add items to the cart</Link>
                  )}
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ItemInfoPage;
