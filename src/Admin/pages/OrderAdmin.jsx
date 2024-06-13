import React from "react";
import DashCategory from "../components/DashCategory";
import "./OrderAdmin.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
export default function OrderAdmin() {
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
              <h3 className="header">ORDERS</h3>
              <button className="btnadd">+ Add Order</button>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Catagory</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image URL</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <button type="button" class="btn btn-primary me-2">
                      View
                    </button>
                    <button type="button" class="btn btn-success me-2">
                      Update
                    </button>
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <button type="button" class="btn btn-primary me-2">
                      View
                    </button>
                    <button type="button" class="btn btn-success me-2">
                      Update
                    </button>
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <button type="button" class="btn btn-primary me-2">
                      View
                    </button>
                    <button type="button" class="btn btn-success me-2">
                      Update
                    </button>
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}
