import css from "./CatalogPage.module.css";

// import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";

import { brands, prices } from "../../services/selects.js";

import AdvertCard from "../../components/AdvertCard/AdvertCard";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import DistanceFilter from "../../components/DistanceFilter/DistanceFilter";
import {
  setBrandFilter,
  setFromFilter,
  setPriceFilter,
  setToFilter,
} from "../../redux/filter/filterSlice";
import {
  selectBrandFilter,
  selectFromFilter,
  selectPriceFilter,
  selectToFilter,
} from "../../redux/filter/selectors";
import { toast } from "react-toastify";

const CatalogPage = () => {
  const adverts = useSelector(selectAdverts);

  const brandsFilter = useSelector(selectBrandFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const fromFilter = useSelector(selectFromFilter);
  const toFilter = useSelector(selectToFilter);

  const dispatch = useDispatch();

  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const onFilterSubmit = () => {
    dispatch(setBrandFilter(brand));
    dispatch(setPriceFilter(price));
    dispatch(setFromFilter(from));
    dispatch(setToFilter(to));
  };

  const filteredAdverts = adverts.filter((advert) => {
    return (
      advert.make === brandsFilter &&
      parseInt(advert.rentalPrice.substring(1)) >= parseInt(priceFilter) &&
      advert.mileage > fromFilter &&
      advert.mileage < toFilter
    );
  });

  const advertsToRender =
    filteredAdverts.length === 0 ? adverts : filteredAdverts;

  return (
    <>
      {/* <Helmet>
        <title>Catalog</title>
      </Helmet> */}
      <div>
        <div className={css.filters}>
          <div className={css.filter}>
            <span className={css.filterLabel}>Car brand</span>
            <Select
              size={"common"}
              selects={brands}
              onChange={setBrand}
              placeholder={"Enter the text"}
            />
          </div>
          <div className={css.filter}>
            <span className={css.filterLabel}>Price/ 1 hour</span>
            <Select
              size={"small"}
              selects={prices}
              onChange={setPrice}
              placeholder={"To $"}
            />
          </div>
          <div className={css.filter}>
            <span className={css.filterLabel}>Сar mileage / km</span>
            <DistanceFilter onFromChange={setFrom} onToChange={setTo} />
          </div>
          <Button size="common" onClick={onFilterSubmit}>
            Search
          </Button>
        </div>
        <ul className={css.catalogList}>
          {advertsToRender &&
            advertsToRender.map((data) => {
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
