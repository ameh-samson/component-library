import ErrorBanner from "./ErrorBanner";
import SuccessBanner from "./SuccessBanner";
import WarningBanner from "./WarningBanner";
import NeutralBanner from "./NeutralBanner";

export default function Banner({ variant, message, title }) {
  if (variant === "success") {
    return <SuccessBanner message={message} title={title} />;
  } else if (variant === "warning") {
    return <WarningBanner message={message} title={title} />;
  } else if (variant === "error") {
    return <ErrorBanner message={message} title={title} />;
  } else if (variant === "neutral") {
    return <NeutralBanner message={message} title={title} />;
  }
}
