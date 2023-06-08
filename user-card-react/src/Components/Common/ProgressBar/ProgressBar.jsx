import React from "react";
import "../../../Assets/css/ProgressBar.css";

function ProgressBar({ download_info }) {
  const { total, completed, size_type } = download_info;
  return (
    <div className="progress__bar">
      <div
        className="progress__bar__status"
        style={{
          width: `${(completed / total) * 100 || 0}%`,
        }}
      ></div>
      <div className="progress__bar__download">{`${completed} ${size_type} of ${total} ${size_type} `}</div>
    </div>
  );
}

export default ProgressBar;
