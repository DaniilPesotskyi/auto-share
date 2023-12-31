import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "../Layout/Layout";
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
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
