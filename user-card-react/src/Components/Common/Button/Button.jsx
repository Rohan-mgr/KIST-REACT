import React from "react";
import "../../../Assets/css/Button.css";

function Button({ status }) {
  return (
    <div className={`primary__btn ${status === "invited" ? "danger" : null}`}>
      <span>{status === "invited" ? "Remove" : "Invite"}</span>
    </div>
  );
}

export default Button;
