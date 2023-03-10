import { useState } from "react";
import { Page } from "../components/Page";

export default function App() {
  const [count, setCount] = useState(0);

  return <Page title="App">app</Page>;
}
