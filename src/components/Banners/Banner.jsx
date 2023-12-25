import SuccessBanner from "./SuccessBanner";
import WarningBanner from "./WarningBanner";

export default function Banner({ variant, message, title }) {
  if (variant === "success") {
    return <SuccessBanner message={message} title={title} />;
  } else if (variant === "warning") {
    return <WarningBanner message={message} title={title} />;
  }
}
