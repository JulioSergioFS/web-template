import beamingFaceWithSmilingEyes from "@iconify/icons-fluent-emoji/beaming-face-with-smiling-eyes";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../components/Page";
import "../styles/pages/app.scss";

export default function App() {
  const navigate = useNavigate();

  return (
    <Page title="App">
      <h3 className="main-title">Home - in progress</h3>
      <div className="card welcome">
        <div className="content">
          <h4>Welcome {localStorage.getItem("name")}!</h4>
          <p>
            Welcome to the Web Template, explore it however you want. How about
            seeing some charts?
          </p>
          <button
            className="button-primary go-to"
            onClick={() => navigate("/web-template/dashboard/charts")}
          >
            I like the idea!
          </button>
        </div>
        <div className="image-container">
          <Icon
            icon={beamingFaceWithSmilingEyes}
            height={140}
            className="icon"
          />
        </div>
      </div>
    </Page>
  );
}
