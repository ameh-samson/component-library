import CongratulationsBanner from "./Congratulations";

export default function Banner({ variant, message, title }) {
  if (variant === "congratulations") {
    return <CongratulationsBanner message={message} title={title} />;
  }
}
