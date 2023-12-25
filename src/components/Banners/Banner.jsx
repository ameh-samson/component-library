import SuccessBanner from "./SuccessBanner";

export default function Banner({ variant, message, title }) {
  if (variant === "success") {
    return <SuccessBanner message={message} title={title} />;
  }
}
