import thinkingProblem from "@iconify/icons-icon-park-outline/thinking-problem";
import { Icon } from "@iconify/react";
import "../../../styles/pages/home.scss";

export function DidYouKnow() {
  return (
    <div className="card did-you-know">
      <div className="did-you-know_content">
        <h4>Did you know...</h4>
        <p>
          ...you can edit your user clicking in your avatar and selecting the{" "}
          <span className="highlight-text">Edit User</span> option.
        </p>
      </div>

      <div className="image-container">
        <Icon icon={thinkingProblem} height={120} className="icon" />
      </div>
    </div>
  );
}
