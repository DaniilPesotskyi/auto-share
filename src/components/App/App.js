// import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";

import Layout from "../common/Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import FavoritePage from "../../pages/FavoritePage/FavoritePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
