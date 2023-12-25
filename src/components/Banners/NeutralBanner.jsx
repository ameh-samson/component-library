import classnames from "classnames";

export default function NeutralBanner({ message, title }) {
  // declaring components classes
  const bannerClasses = classnames("banner", "neutral");
  const iconClasses = classnames(
    "fa-solid",
    "fa-circle-xmark",
    "banner-icons",
    "neutral-icon"
  );
  const titleClasses = classnames("banner-title", "neutral-title");
  const descriptionClasses = classnames(
    "banner-description",
    "neutral-description"
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
