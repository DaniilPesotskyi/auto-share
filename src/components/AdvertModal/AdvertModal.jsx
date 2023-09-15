import css from "./AdvertModal.module.css";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { useEffect } from "react";

const AdvertModal = ({ data, onClose }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    accessories,
    address,
    type,
    fuelConsumption,
    rentalConditions,
    engineSize,
    description,
    mileage,
    rentalPrice,
  } = data;

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getCountryName = () => {
    return address.split(",").slice(-1).join(",").trim();
  };

  const getCityName = () => {
    return address.split(",")[address.split(",").length - 2].trim();
  };

  const strings = rentalConditions.split("\n");

  const ageString = strings[0];
  const age = ageString.replace("Minimum age: ", "");
  const driverLicense = strings[1];
  const requires = strings[2];

  return (
    <div className={css.backdrop} onClick={onBackdropClick}>
      <div className={css.modal}>
        <button type="button" onClick={onClose} className={css.closeBtn}>
          <Icon id={"close"} className={css.closeIcon} />
        </button>
        <div
          className={css.image}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
        <h1 className={css.title}>
          {make} <span className={css.model}>{model}</span>, {year}
        </h1>
        <ul className={css.characteristicList}>
          <li className={css.characteristicItem}>{getCityName()}</li>
          <li className={css.characteristicItem}>{getCountryName()}</li>
          <li className={css.characteristicItem}>Id: {id}</li>
          <li className={css.characteristicItem}>Year: {year}</li>
          <li className={css.characteristicItem}>Type: {type}</li>
          <li className={css.characteristicItem}>
            Fuel Consumption: {fuelConsumption}
          </li>
          <li className={css.characteristicItem}>Engine Size: {engineSize}</li>
        </ul>
        <p className={css.description}>{description}</p>
        <h2 className={css.sectTitle}>Accessories and functionalities:</h2>
        <ul className={css.characteristicList}>
          {accessories.map((a) => (
            <li className={css.characteristicItem}>{a}</li>
          ))}
        </ul>
        <h2 className={css.sectTitle}>Rental Conditions: </h2>
        <ul className={css.conditionsList}>
          <li className={css.conditionsItem}>
            Minimal age: <span className={css.conditionsValue}>{age}</span>
          </li>
          <li className={css.conditionsItem}>{driverLicense}</li>
          <li className={css.conditionsItem}>{requires}</li>
          <li className={css.conditionsItem}>
            Mileage: <span className={css.conditionsValue}>{mileage}</span>
          </li>
          <li className={css.conditionsItem}>
            Price: <span className={css.conditionsValue}>{rentalPrice}</span>
          </li>
        </ul>
        <Button size="common" onClick={() => window.open("tel:+380730000000")}>
          Rental car
        </Button>
      </div>
    </div>
  );
};

export default AdvertModal;
