import { m } from "framer-motion";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Page } from "../components/Page";
import { UserAvatar } from "../components/UserAvatar";
import { pages } from "../constants/sidebarPages";
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
          <m.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.08 }}
            className="logo"
          >
            logo
          </m.div>
          <m.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="user-card"
          >
            <UserAvatar />
            <div className="user-card-data">
              <p className="user-name">{localStorage.getItem("name")}</p>
              <p className="user-role">
                {localStorage.getItem("email") === "admin@gmail.com"
                  ? "administrador"
                  : "visitante"}
              </p>
            </div>
          </m.div>
          <ul className="page-list">
            {pages.map((page, index) => (
              <m.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 * ((index + 1) / 6) }}
                key={page.name}
                className="list-item"
                onClick={() => navigate(`${page.link}`)}
              >
                {page.icon}
                {page.name}
              </m.li>
            ))}
          </ul>
        </div>
        <div className="content">
          <header className="header">
            <UserAvatar
              className="clickable"
              onClick={() => setShowProfilePopup(!showProfilePopup)}
            />
            {showProfilePopup ? (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className="account-popup"
              >
                <div className="list-item" onClick={() => navigate("profile")}>
                  Editar Perfil
                </div>
                <div className="list-item" onClick={handleLogout}>
                  Sair
                </div>
              </m.div>
            ) : null}
          </header>
          <section>
            <Outlet />
          </section>
        </div>
      </main>
    </Page>
  );
}
