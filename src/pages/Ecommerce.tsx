import { useState } from "react";
import { Page } from "../components/Page";

export default function Ecommerce() {
  const [count, setCount] = useState(0);

  return (
    <Page title="Ecommerce">
      <h3 className="main-title">E-Commerce - in progress</h3>
    </Page>
  );
}
