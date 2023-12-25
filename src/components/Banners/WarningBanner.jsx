import classnames from "classnames";

export default function WarningBanner({ message, title }) {
  // declaring components classes
  const bannerClasses = classnames("banner", "warning");
  const iconClasses = classnames(
    "fa-solid",
    "fa-circle-xmark",
    "banner-icons",
    "warning-icon"
  );
  const titleClasses = classnames("banner-title", "warning-title");
  const descriptionClasses = classnames(
    "banner-description",
    "warning-description"
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
