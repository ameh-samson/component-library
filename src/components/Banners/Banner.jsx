import classnames from "classnames";

export default function Banner({ variant, message, title }) {
  // Declare component classes based on the variant
  const bannerClasses = classnames("banner", variant);
  const iconClasses = classnames(
    "fa-solid",
    "fa-circle-xmark",
    "banner-icons",
    `${variant}-icon`
  );
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
