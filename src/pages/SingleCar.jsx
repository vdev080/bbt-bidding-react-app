import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";   // ✅ ADD THIS (fix path if needed)

export default function SingleCar() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/react-bbt-wp/wp-json/wp/v2/cars?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) setCar(data[0]);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  if (!car) return <p>Loading...</p>;

  // ✅ Handle ACF image return type (URL OR object)
  const bannerImage =
    typeof car.acf?.banner_image === "object"
      ? car.acf?.banner_image?.url
      : car.acf?.banner_image;

  const featuredImage =
    typeof car.acf?.featured_image === "object"
      ? car.acf?.featured_image?.url
      : car.acf?.featured_image;

  return (
    <MainLayout>
      <div className="container py-10">

        {/* TITLE */}
        <h1 dangerouslySetInnerHTML={{ __html: car.title.rendered }} />

        {/* CONTENT */}
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: car.content.rendered }}
        />

        {/* FEATURED IMAGE */}
        {featuredImage && (
          <div className="mt-4">
            <img src={featuredImage} alt={car.title.rendered} />
          </div>
        )}

        {/* BANNER ACF */}
        <div className="heading-box">

          {car.acf?.banner_heading && (
            <h2>{car.acf.banner_heading}</h2>
          )}

          {car.acf?.banner_description && (
            <p>{car.acf.banner_description}</p>
          )}

          {bannerImage && (
            <img src={bannerImage} alt="banner" />
          )}

        </div>

      </div>
    </MainLayout>
  );
}