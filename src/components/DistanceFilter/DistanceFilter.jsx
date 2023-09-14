import css from "./DistanceFilter.module.css";

import { useEffect, useState } from "react";

const DistanceFilter = ({ onFromChange, onToChange }) => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    onFromChange(from);
    onToChange(to);
  }, [onFromChange, onToChange, from, to]);

  return (
    <div className={css.filterWrap}>
      <div className={css.filterField}>
        <input
          className={css.filterInput}
          type="number"
          placeholder="From"
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div className={css.filterField}>
        <input
          className={css.filterInput}
          type="number"
          placeholder="To"
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DistanceFilter;
