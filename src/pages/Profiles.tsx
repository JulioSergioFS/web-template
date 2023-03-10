import { useState } from "react";
import { Page } from "../components/Page";

export default function Profiles() {
  const [count, setCount] = useState(0);

  return <Page title="Profiles">profiles</Page>;
}
