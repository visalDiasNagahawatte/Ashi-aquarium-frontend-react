import React from "react";
import { Link } from "react-router-dom"; 

const ItemCard = (props) => {
  console.log("Image URL:", props.img);
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 ">
      <Link to={`/item/${encodeURIComponent(props.title)}`}>
        <div className="card w-100 my-2 shadow-2-strong">
          <img
            src={props.img}
            className="card-img-top"
            style={{ width: "100%" }}
            height={350}
          />
          <div className="card-body d-flex flex-column">
            <div className="d-flex flex-row">
              <h5 className="mb-1 me-1">{props.title}</h5>
            </div>
            <p className="card-text">Rs. {props.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
