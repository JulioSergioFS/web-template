import { useState } from "react";
import { Page } from "../components/Page";
import "../styles/dashboard.scss";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <Page title="Dashboard">
      <main>
        <div className="sidebar">
          <div>logo</div>
          <div>Username</div>
          <ul className="page-list">
            {["App", "Ecommerce", "Charts", "Profile"].map((page) => (
              <li>{page}</li>
            ))}
          </ul>
        </div>
        <div className="content">
          <header>header</header>
          <section>conteúdo</section>
        </div>
      </main>
    </Page>
  );
}
