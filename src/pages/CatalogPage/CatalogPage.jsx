import css from "./CatalogPage.module.css";

// import { Helmet } from "react-helmet";

import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";

const examplaData = {
  id: 9584,
  year: 2019,
  make: "Volvo",
  model: "XC90",
  type: "SUV",
  img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg",
  description:
    "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
  fuelConsumption: "8.3",
  engineSize: "2.0L 4-cylinder",
  accessories: [
    "Nappa leather seats",
    "Bowers & Wilkins premium sound system",
    "Head-up display",
  ],
  functionalities: [
    "IntelliSafe advanced safety features",
    "Pilot Assist semi-autonomous driving",
    "Four-zone automatic climate control",
  ],
  rentalPrice: "$50",
  rentalCompany: "Premium Auto Rentals",
  address: "456 Example Avenue, Lviv, Ukraine",
  rentalConditions:
    "Minimum age: 21\nValid driver's license\nProof of insurance required",
  mileage: 5352,
};

const CatalogPage = () => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Catalog</title>
      </Helmet> */}
      <div>
        <h1>Catalog</h1>
        <ul className={css.catalogList}>
          {adverts &&
            adverts.map((data) => {
              return (
                <li key={data.id} className={css.catalogItem}>
                  <AdvertCard data={data} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default CatalogPage;
