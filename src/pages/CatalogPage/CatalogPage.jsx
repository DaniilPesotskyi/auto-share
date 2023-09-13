import css from "./CatalogPage.module.css";

// import { Helmet } from "react-helmet";

import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";

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
