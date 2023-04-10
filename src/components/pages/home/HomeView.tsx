import React, { useEffect, useState } from "react";
import "./homeView.css";
import Header from "../../header/Header";
import Caraousal from "../../caraousal/Caraousal";
import Features from "../../features/Features";
import ProductView from "../../productView/ProductView";
import Footer from "../../footer/Footer";

const HomeView = () => {
  const [wishListProducts, setWishlistItem] = useState<any[]>([]);
  /**
   * Add product in wishlist from product items
   * @param wishListItem
   */
  const addProductInWishlistHandler = (wishListItem: any) => {
    const currentProductId = wishListItem.id;
    if (!wishListProducts.includes(currentProductId)) {
      const wishListItems: string[] = [...wishListProducts, currentProductId];
      setWishlistItem(wishListItems);
    }
    console.log(wishListProducts);
  };
  /**
   *
   */
  useEffect(() => {
    console.log("App useEffect(): ", wishListProducts);
  }, [wishListProducts]);
  return (
    <>
      <Header
        parentWishListProducts={wishListProducts}
        addProductInWishlistHandler={addProductInWishlistHandler}
      />
      <Caraousal />
      <Features />
      <ProductView
        wishListProducts={wishListProducts}
        addProductInWishlistHandler={addProductInWishlistHandler}
      />
      <Footer />
    </>
  );
};
export default HomeView;
