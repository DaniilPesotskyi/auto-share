import css from "./Button.module.css";
import cn from "classnames";

const Button = ({ className, size = "common", children }) => {
  return (
    <button
      type="button"
      className={cn(className, css.button, {
        [css.small]: size === "small",
        [css.common]: size === "common",
        [css.large]: size === "large",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
