import { DotLoader } from "react-spinners";

export default function Spinner({ spinnerColor, animationSpeed, msg }) {
  return (
    <div className="loading-msg-container">
      <DotLoader
        color={spinnerColor}
        speedMultiplier={animationSpeed}
        className="spinner-animation"
      />
      <span className="loading-msg">{msg}</span>
    </div>
  );
}
