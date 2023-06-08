import React from "react";
import Card from "../Card/Card";
import Status from "../Common/Status/Status";
import ProgressBar from "../Common/ProgressBar/ProgressBar";
import Button from "../Common/Button/Button";

function UserRow(props) {
  const { username, position, user_status, invite_status, progress_status } =
    props;
  return (
    <tr>
      <td style={{ display: "flex" }}>
        <input type="checkbox" style={{ border: "3px solid red" }} />
        <Card initial={username} progress={50} />
      </td>
      <td>
        <p className="card__content__designation">{position}</p>
      </td>
      <td>
        <Status status={user_status} />
      </td>
      <td>
        <ProgressBar percentage={50} download_info={progress_status} />
      </td>
      <td>
        <Button status={invite_status} />
      </td>
    </tr>
  );
}

export default UserRow;
