import React from "react";
import { CustomerCard } from "./CustomerCard";
import { CustomerCard2 } from "./CustomerCard2";
import { CustomerCard3 } from "./CustomerCard3";
import "../../../styles/Home-page/Customer-review.css";

export const HomeCustomers = () => {
  return (
    <div className="home-customer-section">
      <div className="home-card-heading" style={{ margin: "50px 0" }}>
        <h1>
          Here's what a few of our customers <br />
          have to say about us{" "}
        </h1>
      </div>
      <div className="cards" style={{ backgroundColor: "#d3d3d345" }}>
        <CustomerCard />
        <CustomerCard2 />
        <CustomerCard3 />
       
      </div>
    </div>
  );
};
