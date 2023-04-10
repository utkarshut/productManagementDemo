import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./components/pages/home/HomeView";
import ProductInfo from "./components/pages/productInfo/ProductInfo"
import "./App.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* load layout at /  */}
        <Route path="/">
          <Route index element={<ProductInfo />} />
          <Route path="product" element={<HomeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
