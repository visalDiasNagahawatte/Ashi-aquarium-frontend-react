import React from "react";

function DashCategory() {
  return (
    <div>
      <button
        class="btn btn-outline-secondary mb-3 w-100 d-lg-none"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>Show filter</span>
      </button>
      <div class="collapse card d-lg-block mb-5" id="navbarSupportedContent">
        <div
          class="accordion position-fixed"
          id="accordionPanelsStayOpenExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button text-dark bg-light"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Admin Dashboard
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div class=" accordion-body ">
                <ul>
                  <li>
                    <a
                      href="/useradmin"
                      class=" text-dark"
                      // onClick={() => handleCategoryClick(null)}
                    >
                      <label htmlFor="jackets">User Management</label>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/productadmin"
                      class=" text-dark"
                      // onClick={() => handleCategoryClick(null)}
                    >
                      <label htmlFor="jackets">Product Management</label>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/orderadmin"
                      class=" text-dark"
                      // onClick={() => handleCategoryClick(null)}
                    >
                      <label htmlFor="jackets">Order Management</label>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/customeradmin"
                      class=" text-dark"
                      // onClick={() => handleCategoryClick(null)}
                    >
                      <label htmlFor="jackets">Customer Management</label>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categoryadmin"
                      class=" text-dark"
                      // onClick={() => handleCategoryClick(null)}
                    >
                      <label htmlFor="jackets">Category Management</label>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashCategory;
