import Navbar from "../../../components/Navbar/Navbar";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Slider page={"1"} limit={"10"} />
    </div>
  );
};

export default Home;
