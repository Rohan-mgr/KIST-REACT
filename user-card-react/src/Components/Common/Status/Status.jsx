import React from "react";
import "../../../Assets/css/Status.css";

function Status({ status }) {
  return (
    // <div className={`status ${status === "in_active" ? "inactive" : null}`}>
    //   <span>{status === "in_active" ? "Inactive" : "Active"}</span>
    // </div>
    <div
      className={`status ${
        status === "blocked"
          ? "blocked"
          : status === "in_active"
          ? "inactive"
          : null
      }`}
    >
      <span>
        {status === "blocked"
          ? "Blocked"
          : status === "in_active"
          ? "Inactive"
          : "Active"}
      </span>
    </div>
  );
}

export default Status;
