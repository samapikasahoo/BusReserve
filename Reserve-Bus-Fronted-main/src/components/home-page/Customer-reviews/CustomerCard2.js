import React from "react";

export const CustomerCard2 = () => {
  return (
    <div className="customer-card">
      <div className="customer-section-head">
        <div className="customer-details">
          <p style={{ fontSize: "25px", fontWeight: "600" }}>Rakesh Chauhan</p>
          <p style={{ fontSize: "17px" }}>Customer Since 2018</p>
        </div>
      </div>
      <div className="customer-rating">
        <span>4.5</span>
      </div>
      <div className="customer-feedback">
      Awesome service, Always a best time with reserve. Thankyou Reserve!.
        <br />
      </div>
    </div>


  );
};