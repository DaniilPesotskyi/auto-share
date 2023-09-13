import css from "./Layout.module.css";

import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import cn from "classnames";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const Layout = () => {
  return (
    <>
      <header className={css.header} data-theme="light">
        <div className={css.container}>
          <nav className={css.navigation}>
            <NavLink className={css.logoWrap} to="/">
              <Icon id={"logo"} className={css.logo}></Icon>
              AutoShare
            </NavLink>
            <ul className={css.navigationList}>
              <li className={css.navigationItem}>
                <NavLink className={css.navigationLink} to="/catalog">
                  Catalog
                </NavLink>
              </li>
              <li className={css.navigationItem}>
                <NavLink
                  className={cn(css.navigationLink, css.favLink)}
                  to="/favorites"
                >
                  <Icon className={css.heartIcon} id={"heart"} />
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
          <Button className={cn(css.themeBtn)} size="small" type="button">
            <Icon className={cn(css.themeIcon)} id={"theme"} />
          </Button>
        </div>
      </header>
      <main data-theme="light">
        <div className={css.container}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;