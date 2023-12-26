import "./testimonialStyles.css";

export default function Testimonial() {
  return (
    <div className="testimonial-wrapper">
      <img
        className="testimonial-image"
        src="/public/header-mobile.png"
        alt="May Andersons smiling at the camera beautifully"
      />
      <div>
        <blockquote>
          <img src="/public/icon.png" alt="inverted comma image" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.
          </span>
          <footer>
            <cite className="name">May Andersons</cite> <br />
            <cite className="role">Workcation, CTO</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
