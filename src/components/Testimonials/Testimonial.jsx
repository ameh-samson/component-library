export default function Testimonial() {
  return (
    <div className="testimonial-wrapper">
      <div>
        <img
          src="/public/image.png"
          alt="May Andersons smiling at the camera beautifully"
        />
        <div>
          <blockquote>
            <img src="/public/icon.png" alt="inverted comma image" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.
            <footer>
              <cite>May Andersons</cite>
              <cite>Workcation, CTO</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
