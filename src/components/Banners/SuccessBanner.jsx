export default function SuccessBanner({ message, title }) {
  return (
    <div className="banner success">
      <i className="fa-solid fa-circle-xmark banner-icons success-icon"></i>
      <div>
        {message ? (
          <>
            <h1 className="banner-title success-title">{title}</h1>
            <p className="banner-description success-description">{message}</p>
          </>
        ) : (
          <h1 className="banner-title success-title">{title}</h1>
        )}
      </div>
    </div>
  );
}
