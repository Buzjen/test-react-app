import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const params = useParams<"id">();
  const [item, setItem] = useState([]);

  async function fetchDetailItem() {
    const response = await axios.get(
      `https://64113b971a5dca342586d356.mockapi.io/items`
    );
  }

  useEffect(() => {
    fetchDetailItem();
  }, []);

  return (
    <div className="container mx-auto pt-5 max-w-[760px]">
      <h1 className="text-center text-2xl">Track {params.id}</h1>
    </div>
  );
};
