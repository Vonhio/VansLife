import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Van } from "./Vans";

export default function VanDetail() {
  const { id } = useParams<{ id?: string }>();
  const [data, setData] = useState<Van | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/vans/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data.van));
    }
  }, [id]);

  return (
    <div className="van-detail-container">
      {data ? (
        <div className="van-detail">
          <img src={data.imageUrl} />
          <i className={`van-type ${data.type} selected`}>{data.type}</i>
          <h2>{data.name}</h2>
          <p className="van-price">${data.price}/day</p>
          <p>{data.description}</p>
          <button className="link-button">Rent this van</button>
    </div> ) : (<h2>Loading...</h2>)}
  </div>
  );
}