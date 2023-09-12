import css from "./Layout.module.css";

import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Button from "../Button/Button";

const Layout = () => {
  return (
    <>
      <header>
        <div className={css.container}>
          <nav>
            <NavLink to="/">
              <div className={css.logo}></div>
              AutoShare
            </NavLink>
            <ul>
              <li>
                <NavLink to="/favorites">
                  <Button size="small">fav</Button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/catalog">
                  <Button size="common">Rental Car</Button>
                </NavLink>
              </li>
            </ul>
          </nav>
          <Button size="small">theme</Button>
        </div>
      </header>
      <main data-theme="light">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
