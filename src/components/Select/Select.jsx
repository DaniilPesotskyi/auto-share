import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./Select.module.css";

import cn from "classnames";

const Select = ({ placeholder, size, selects, onChange }) => {
  const onSelectMenuRender = () => {
    return <div className={css.selectMenu}></div>;
  };

  return <div className={css.selectWrap}></div>;
};

export default Select;
