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
        {favorites.length > 0 ? (
          favorites.map((data) => {
            return (
              <li key={data.id} className={css.catalogItem}>
                <AdvertCard data={data} />
              </li>
            );
          })
        ) : (
          <p className={css.nothingLetter}>You haven't added any cars yet :(</p>
        )}
      </ul>
    </div>
  );
};

export default FavoritePage;
