export default function CongratulationsBanner({ message, title }) {
  return (
    <div className="banner congratulation">
      <i className="fa-solid fa-circle-xmark banner-icons congratulation-icon"></i>
      <div>
        {message ? (
          <>
            <h1 className="banner-title title">{title}</h1>
            <p className="banner-description description">{message}</p>
          </>
        ) : (
          <h1 className="banner-title title">{title}</h1>
        )}
      </div>
    </div>
  );
}
