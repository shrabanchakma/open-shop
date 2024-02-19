import { useEffect, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
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
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );

  if (errorMsg)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        {errorMsg}
      </div>
    );

  return (
    <div className="relative bg-green-500">
      <div className="h-[calc(100vh-64px)] bg-yellow-500 flex justify-center  w-full relative">
        <button
          onClick={() => goLeft(currentImg)}
          className="text-4xl absolute bottom-0 right-[47px] bg-base-200 rounded-sm py-[.4rem] px-[.3rem]"
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
          className="text-4xl absolute bottom-0 right-0 bg-base-200 rounded-sm py-[.4rem] px-[.3rem]"
        >
          <FcNext />
        </button>
      </div>
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        {images && images.length ? (
          images.map((_, idx) => (
            <button
              key={idx}
              className={
                currentImg === idx
                  ? "h-[1rem] w-[1rem] mr-[10px] rounded-full bg-white"
                  : " h-[1rem] w-[1rem] mr-[10px] rounded-full bg-gray-400"
              }
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
