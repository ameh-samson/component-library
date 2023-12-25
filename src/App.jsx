import Badges from "./components/Badges/Badges";
import Banner from "./components/Banners/Banner";
export default function App() {
  return (
    <div>
      <Banner
        title="Congratulations!"
        variant="success"
        message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />

      <Banner
        title="Attention"
        variant="warning"
        message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />

      <Banner
        title="There is a problem with your application"
        variant="error"
        message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />

      <Banner
        title="Update available"
        variant="neutral"
        message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
    </div>
  );
}

// <div>
//   <Badges variant="red" badgeShape="pill">
//     Buy Now
//   </Badges>
// </div>
