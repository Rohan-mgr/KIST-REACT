import React from "react";
import "../../Assets/css/App.css";
import NameInitials from "../Name-Initials/NameInitials";

export default function Card({ initial, progress }) {
  return (
    <div className="card">
      <NameInitials name={initial || ""} />
      <div className="card__content">
        <p className="card__content__username">{initial || ""}</p>
      </div>
    </div>
  );
}
