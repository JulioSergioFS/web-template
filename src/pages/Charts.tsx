import { useState } from "react";
import { Page } from "../components/Page";

export default function Charts() {
  const [count, setCount] = useState(0);

  return <Page title="Charts">charts</Page>;
}
