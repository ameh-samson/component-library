import classnames from "classnames";
import "./bannerStyles.css";

export default function Banner({ variant, message, title }) {
  // Declare component classes based on the variant
  const bannerClasses = classnames("banner", variant);

  //   set different icon based on variant
  let iconClass;
  switch (variant) {
    case "success":
      iconClass = "fa-solid fa-circle-check";
      break;
    case "warning":
      iconClass = "fa-sharp fa-solid fa-triangle-exclamation";
      break;
    case "error":
      iconClass = "fa-solid fa-circle-xmark";
      break;
    case "neutral":
      iconClass = "fa-solid fa-circle-info";
      break;
    default:
      iconClass = "";
  }

  const iconClasses = classnames(iconClass, "banner-icons", `${variant}-icon`);
  const titleClasses = classnames("banner-title", `${variant}-title`);
  const descriptionClasses = classnames(
    "banner-description",
    `${variant}-description`
  );

  return (
    <div className={bannerClasses}>
      <i className={iconClasses}></i>
      <div>
        {message ? (
          <>
            <h1 className={titleClasses}>{title}</h1>
            <p className={descriptionClasses}>{message}</p>
          </>
        ) : (
          <h1 className={titleClasses}>{title}</h1>
        )}
      </div>
    </div>
  );
}
