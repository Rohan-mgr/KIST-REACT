import React from "react";
import "./Assets/css/App.css";
import { employeeList } from "./UserMockData";
import UserRow from "./Components/UserRow/UserRow";

export default function App() {
  return (
    <div className="app">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.users?.length > 0 ? (
            employeeList.users.map((user, i) => {
              return (
                <UserRow
                  key={i}
                  username={user.full_name}
                  position={user.designation}
                  user_status={user.active_status}
                  invite_status={user.invited_status}
                  progress_status={user.download_completed_rate}
                />
              );
            })
          ) : (
            <p>No Users</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
