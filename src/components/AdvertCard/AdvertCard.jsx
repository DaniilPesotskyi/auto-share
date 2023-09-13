import Button from "../Button/Button";
import css from "./AdvertCard.module.css";

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
    rentalCompany,
  } = data;

  const getRandomAccessory = () => {
    const accessoryIndex = Math.round(
      Math.random() * (0 + (accessories.length - 1))
    );
    if(accessories[accessoryIndex].length >= 28) {
        return `${accessories[accessoryIndex].slice(0, 28)}...`
        
    }
    return accessories[accessoryIndex];
  };

  const getCityName = () => {
    return "Dnipro";
  };

  const getCountryName = () => {
    return "Ukraine";
  };

  return (
    <div className={css.advertWrap}>
      <button className={css.favBtn} type="button"></button>
      <div
        className={css.imageWrap}
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
      <div className={css.header}>
        <h2 className={css.title}>
          {make} <span className={css.model}>{model}</span>, {year}
        </h2>
        <span className={css.price}>{rentalPrice}</span>
      </div>
      <ul className={css.characteristicList}>
        <li className={css.characteristicItem}>{getCityName()}</li>
        <li className={css.characteristicItem}>{getCountryName()}</li>
        <li className={css.characteristicItem}>{rentalCompany}</li>
        <li className={css.characteristicItem}>{type}</li>
        <li className={css.characteristicItem}>{make}</li>
        <li className={css.characteristicItem}>{id}</li>
        <li className={css.characteristicItem}>{getRandomAccessory()}</li>
      </ul>
      <Button size="large">Learn more</Button>
    </div>
  );
};

export default AdvertCard;
