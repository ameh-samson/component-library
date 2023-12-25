import classnames from "classnames";

export default function SuccessBanner({ message, title }) {
  // declaring components classes
  const bannerClasses = classnames("banner", "success");
  const iconClasses = classnames(
    "fa-solid",
    "fa-circle-check",
    "banner-icons",
    "success-icon"
  );
  const titleClasses = classnames("banner-title", "success-title");
  const descriptionClasses = classnames(
    "banner-description",
    "success-description"
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
