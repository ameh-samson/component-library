import classnames from "classnames";

export default function ErrorBanner({ message, title }) {
  // declaring components classes
  const bannerClasses = classnames("banner", "error");
  const iconClasses = classnames(
    "fa-solid",
    "fa-circle-xmark",
    "banner-icons",
    "error-icon"
  );
  const titleClasses = classnames("banner-title", "error-title");
  const descriptionClasses = classnames(
    "banner-description",
    "error-description"
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
