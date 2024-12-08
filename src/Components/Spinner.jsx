import { DotLoader } from "react-spinners";

export default function Spinner({
  spinnerColor = "#4f5d75",
  animationSpeed = 1,
  msg = "Loading...",
}) {
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
