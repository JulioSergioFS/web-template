import { useState } from "react";
import { Page } from "../components/Page";

export default function Profile() {
  const [count, setCount] = useState(0);

  return <Page title="Profile">profile</Page>;
}
