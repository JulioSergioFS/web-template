import { useNavigate } from "react-router-dom";
import { Page } from "../components/Page";
import { DidYouKnow } from "../components/pages/home/DidYouKnow";
import { Welcome } from "../components/pages/home/Welcome";
import "../styles/pages/home.scss";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Page title="Home">
      <h3 className="main-title">Home</h3>
      <div className="cards">
        <Welcome />
        <DidYouKnow />
      </div>
    </Page>
  );
}
