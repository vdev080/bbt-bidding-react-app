import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleCar() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(
      `http://localhost/react-bbt-wp/wp-json/wp/v2/cars?slug=${slug}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setCar(data[0]);
        }
      })
      .catch((err) => console.error(err));
  }, [slug]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className="container py-10">
      <h1 dangerouslySetInnerHTML={{ __html: car.title.rendered }} />

      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: car.content.rendered }}
      />
    </div>
  );
}