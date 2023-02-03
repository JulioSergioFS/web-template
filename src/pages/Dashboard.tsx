import { useState } from "react";
import "../styles/dashboard.scss";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>sidebar</div>
      <div>content</div>
    </div>
  );
}
