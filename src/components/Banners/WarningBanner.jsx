export default function WarningBanner({ message, title }) {
  return (
    <div className="banner warning">
      <i className="fa-solid fa-circle-xmark banner-icons warning-icon"></i>
      <div>
        {message ? (
          <>
            <h1 className="banner-title warning-title">{title}</h1>
            <p className="banner-description warning-description">{message}</p>
          </>
        ) : (
          <h1 className="banner-title warning-title">{title}</h1>
        )}
      </div>
    </div>
  );
}
