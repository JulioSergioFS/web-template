import beamingFaceWithSmilingEyes from "@iconify/icons-fluent-emoji/beaming-face-with-smiling-eyes";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../../redux/store";
import "../../../styles/pages/home.scss";

export function Welcome() {
  const navigate = useNavigate();
  const { selectedUser } = useSelector((state) => state.user);

  return (
    <div className="card welcome">
      <div className="welcome_content">
        <h4>Welcome {selectedUser?.name}!</h4>
        <p>
          Welcome to the Web Template, explore it however you want. How about
          seeing some charts?
        </p>
        <button
          className="button-primary go-to"
          onClick={() => navigate("/web-template/dashboard/charts")}
        >
          I Like The Idea!
        </button>
      </div>
      <div className="image-container">
        <Icon icon={beamingFaceWithSmilingEyes} height={140} className="icon" />
      </div>
    </div>
  );
}
