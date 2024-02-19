import { useEffect, useState } from "react";

const Slider = ({ page, limit }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getImages() {
    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const data = await res.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
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

  return (
    <div className="h-[calc(100vh-64px)] bg-yellow-500">this is a slider</div>
  );
};

export default Slider;
