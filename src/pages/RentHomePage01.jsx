import React, { useEffect, useState, useMemo } from "react";
import "./RentHomePage01.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import Category from "../components/Category";
import axios from "axios";
import { useSelector } from "react-redux";

function RentHomePage01() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    // Fetch category data from the backend API
    axios
      .get("http://localhost:8080/api/v1/category")
      .then((response) => {
        console.log("category data received:", response.data);
        // Update the categories state with the fetched category data
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });

    // Fetch product data from the backend API
    axios
      .get("http://localhost:8080/api/v1/product")
      .then((response) => {
        console.log("product data received:", response.data);
        // Update the filteredItems state with the fetched product data
        setFilteredItems(response.data.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  const getCategoryById = (categoryId) => {
    return categories.find((cat) => cat.categoryId === categoryId);
  };

  const handleCategoryChange = (category) => {
    console.log("Selected Category:", category);
    setSelectedCategory(category); // Pass the category name (string) instead of the entire object
  };

  const itemsToDisplay = useMemo(() => {
    if (selectedCategory) {
      if (selectedCategory === "All Categories") {
        // If the selected category is "All Categories", return all items
        return filteredItems;
      } else {
        // Filter items based on the selected category name (using productId)
        const selectedCategoryId = categories.find(
          (cat) => cat.title === selectedCategory
        )?.categoryId;

        return filteredItems.filter(
          (item) => item.categoryDTO?.categoryId === selectedCategoryId
        );
      }
    }

    // If no category is selected, return all items
    return filteredItems;
  }, [selectedCategory, filteredItems, categories]);

  return (
    <div>
      <div className="mb-3 sticky-lg-top">
        <NavBar></NavBar>
      </div>
      <div>
        <section class="">
          <div class="container">
            <div class="row">
              <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                categories={categories}
              />

              <div class="col-lg-9">
                <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3"></header>

                <div class="row">
                  {itemsToDisplay.map((item) => {
                    console.log("item:", item);
                    return (
                      <ItemCard
                        id={item.productId}
                        img={item.imgUrl}
                        title={item.title}
                        price={item.price}
                        key={item.productId}
                      />
                    );
                  })}
                </div>

                <hr />

                <nav
                  aria-label="Page navigation example"
                  class="d-flex justify-content-center mt-3"
                ></nav>
              </div>
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

export default RentHomePage01;
