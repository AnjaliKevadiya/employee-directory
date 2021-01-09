import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Employee Directory</h1>
        <p className="card-text">
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Header;
