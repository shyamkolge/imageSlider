import ImageSlider from "./components/ImageSlider";
import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";
import img5 from "/img5.jpg";

const imageUrls = [img1, img2, img3, img4, img5];

function App() {
  return (
    <div className="max-w-[1920px] h-[780px] w-full m-auto">
      <ImageSlider imageUrls={imageUrls} />
    </div>
  );
}

export default App;
