import css from "./AdvertCard.module.css";

import { useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/adverts/selectors";
import { addFavorite, removeFavorite } from "../../redux/adverts/advertsSlice";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import AdvertModal from "../AdvertModal/AdvertModal";

const AdvertCard = ({ data }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
  } = data;

  const [isModalOpen, setIsOpenModal] = useState(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const onModalToggle = () => {
    setIsOpenModal(!isModalOpen);
  };

  const getRandomAccessory = () => {
    const accessoryIndex = Math.round(
      Math.random() * (0 + (accessories.length - 1))
    );
    if (accessories[accessoryIndex].length >= 24) {
      return accessories[accessoryIndex];
    }
    return accessories[accessoryIndex];
  };

  const getCountryName = () => {
    return address.split(",").slice(-1).join(",").trim();
  };

  const getCityName = () => {
    return address.split(",")[address.split(",").length - 2].trim();
  };

  const isFavoriteCheck = () => {
    if (favorites.some((item) => item.id === id)) {
      return true;
    }

    return false;
  };

  const onFavoriteToggle = () => {
    if (isFavoriteCheck()) {
      dispatch(removeFavorite(id));
      return;
    }
    dispatch(addFavorite(data));
  };

  const formatedMileage =
    mileage.toString().slice(0, 1) + "," + mileage.toString().slice(1);

  return (
    <div className={css.advertWrap}>
      <button className={css.favBtn} type="button" onClick={onFavoriteToggle}>
        <Icon
          id={"heart"}
          className={cn(css.favIcon, {
            [css.favActive]: isFavoriteCheck(),
          })}
        />
      </button>
      <div
        className={css.imageWrap}
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
      <div className={css.header}>
        <h2 className={css.title}>
          {make} <span className={css.model}>{`${model.substring(0, 4)}`}</span>
          , {year}
        </h2>
        <span className={css.price}>{rentalPrice}</span>
      </div>
      <ul className={css.characteristicList}>
        <li className={css.characteristicItem}>{getCityName()}</li>
        <li className={css.characteristicItem}>{getCountryName()}</li>
        <li className={css.characteristicItem}>{rentalCompany}</li>
        <li className={css.characteristicItem}>{type}</li>
        <li className={css.characteristicItem}>{model}</li>
        <li className={css.characteristicItem}>{formatedMileage}</li>
        <li
          className={css.characteristicItem}
        >{`${getRandomAccessory().substring(0, 8)}...`}</li>
      </ul>
      <Button size="large" onClick={onModalToggle}>
        Learn more
      </Button>
      {isModalOpen && <AdvertModal data={data} onClose={onModalToggle} />}
    </div>
  );
};

export default AdvertCard;
