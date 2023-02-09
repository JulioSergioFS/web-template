import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Page } from "../components/Page";
import "../styles/dashboard.scss";

export default function Dashboard() {
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
  };

  return (
    <Page title="Dashboard">
      <main>
        <div className="sidebar">
          <div className="logo">logo</div>
          <div className="user-card">
            <div className="user-card-photo" />
            <div className="user-card-data">
              <p className="user-name">{localStorage.getItem("name")}</p>
              <p className="user-role">
                {localStorage.getItem("email") === "admin@gmail.com"
                  ? "administrador"
                  : "visitante"}
              </p>
            </div>
          </div>
          <ul className="page-list">
            {["App", "Ecommerce", "Charts", "Profile"].map((page) => (
              <li key={page} className="page-list-items">
                {page}
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <header className="header">
            language
            <div
              className="user-card-photo"
              onClick={() => setShowProfilePopup(!showProfilePopup)}
            />
            {showProfilePopup ? <div onClick={handleLogout}>Sair</div> : null}
          </header>
          <section>
            <Outlet />
          </section>
        </div>
      </main>
    </Page>
  );
}
