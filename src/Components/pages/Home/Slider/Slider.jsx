import { useEffect, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import "./Slider.css";
const Slider = ({ page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  async function getImages() {
    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const data = await res.json();
      console.log(data);
      setImages(data);
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function goLeft(currentIdx) {
    currentIdx === 0
      ? setCurrentImg(images.length - 1)
      : setCurrentImg(currentImg - 1);
  }
  function goRight(currentIdx) {
    currentIdx === images.length - 1
      ? setCurrentImg(0)
      : setCurrentImg(currentIdx + 1);
  }

  useEffect(() => {
    getImages();
  }, [page, limit]);

  if (loading)
    return (
      <div className="banner-size">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );

  if (errorMsg) return <div className="banner-size">{errorMsg}</div>;

  return (
    <div className="relative bg-green-500">
      <div className="h-[calc(100vh-64px)] bg-yellow-500 flex justify-center  w-full relative">
        <button
          onClick={() => goLeft(currentImg)}
          className="sliding-button right-[47px] "
        >
          <FcPrevious />
        </button>
        {images && images.length ? (
          images.map((imageItem, idx) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentImg === idx ? "block w-full object-cover" : "hidden"
              }
            />
          ))
        ) : (
          <div>no images available</div>
        )}
        <button
          onClick={() => goRight(currentImg)}
          className="sliding-button right-0 "
        >
          <FcNext />
        </button>
      </div>
      <span className="absolute bottom-0 left-1/2 flex gap-1 transform -translate-x-1/2">
        {images && images.length ? (
          images.map((_, idx) => (
            <button
              onClick={() => setCurrentImg(idx)}
              key={idx}
              className={`slider-dot ${
                currentImg === idx ? " bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))
        ) : (
          <div>no images available</div>
        )}
      </span>
    </div>
  );
};

export default Slider;
