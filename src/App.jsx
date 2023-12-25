import Badges from "./components/Badges/Badges";
import Banner from "./components/Banners/Banner";
export default function App() {
  return (
    <div>
      <Banner
        title="Congratulations!"
        variant="congratulations"
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
