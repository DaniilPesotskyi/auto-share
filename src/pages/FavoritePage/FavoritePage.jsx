import css from "./FavoritePage.module.css";

import { useSelector } from "react-redux";

import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { selectFavorites } from "../../redux/adverts/selectors";

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <h1 className={css.pageTitle}>Favorite</h1>
      <ul className={css.catalogList}>
        {favorites &&
          favorites.map((data) => {
            return (
              <li key={data.id} className={css.catalogItem}>
                <AdvertCard data={data} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FavoritePage;
