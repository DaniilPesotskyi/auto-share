import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import css from "./Select.module.css";

import cn from "classnames";

const Select = ({ placeholder, size, selects, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState("");
  const [isChosen, setIsChosen] = useState(false);

  useEffect(() => {
    onChange(value);
    setIsChosen(true);

    if (value.length >= 1 && isChosen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    setIsChosen(false);
  }, [onChange, value]);

  const onSelectMenuRender = () => {
    return (
      <ul className={css.selectMenuList}>
        {selects
          .filter((s) => s.toLowerCase().includes(value.toLowerCase()))
          .map((s) => {
            return (
              <li key={s} className={css.selectMenuItem}>
                <button
                  onClick={() => {
                    setValue(s);
                    setIsChosen(true);
                    setIsOpen(false);
                  }}
                  className={css.selectMenuBtn}
                >
                  {s}
                </button>
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <div
      className={cn(css.selectWrap, {
        [css.common]: size === "common",
        [css.small]: size === "small",
      })}
    >
      <input
        type="text"
        className={css.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        className={css.selectBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          id="arrow"
          className={cn(css.selectIcon, {
            [css.open]: isOpen === true,
          })}
        />
      </button>
      {isOpen && onSelectMenuRender()}
    </div>
  );
};

export default Select;
