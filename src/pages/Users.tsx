import { useState } from "react";
import { Page } from "../components/Page";
import "../styles/pages/users.scss";

export default function Users() {
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  const [count, setCount] = useState(0);

  return (
    <Page title="User List">
      <div className="title-and-button">
        <h3 className="main-title">User List</h3>
        <button className="button-primary">Add New</button>
      </div>
      <div className="users card">
        <table cellSpacing="0">
          <thead>
            {["Name", "Email", "Password", "Active"].map((item) => (
              <th key={item}>{item}</th>
            ))}
          </thead>
          <tbody>
            {users.length ? (
              users.map((row: any) => (
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <div className="no-data">No users</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Page>
  );
}
