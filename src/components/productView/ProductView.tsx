import React, { FC, useState } from "react";
import "./productView.css";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRODUCT_TAB_LIST } from "../../utils/constants";
import { PRODUCT_LIST } from "../../utils/mockData";

interface ProductItem {
  productName: string;
  hoverImage: string;
  defaultImage: string;
  rating: number;
  price: number;
  discountInPercentage?: number;
  isNew?: boolean;
  itemAvaliable: boolean;
  id: string;
}

const renderProductNavItems = () => {
  return PRODUCT_TAB_LIST.map((eachProductTab) => {
    return (
      <div key={Math.random()} className="productTab">
        <h4 key={Math.random()}>{eachProductTab.name}</h4>
      </div>
    );
  });
};

const ProductItems = (props: any) => {
  /**
   * Variable from parent function component
   */
  const { eachProduct ,addProductInWishlistHandler} = props;
  /**
   * Function trigger on mouse hover of product image
   * @param enableFocus
   */
  const setFocus = (enableFocus: boolean) => {};
  /**
   * This function add product item in wishlist of property
   * @param productDetails
   */
  const addProductInWishlist = (productDetails: any) => {
    console.log("ProductItems: ", productDetails);
    props.addProductInWishlist(productDetails);
  };
  /**
   * logic to calculate actual price based on discount percentage
   */
  const discountPrice: number | null = eachProduct.discountInPercentage
    ? eachProduct.price -
      (eachProduct.price * eachProduct.discountInPercentage) / 100
    : null;

  return (
    <div key={eachProduct.id} className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
      <div
        className="productImage"
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
      >
        <a href="aa">
          <img alt="" className="defaulImage" src={eachProduct.defaultImage} />
          <img alt="" className="hoverImage" src={eachProduct.hoverImage} />
        </a>
        {eachProduct.discountInPercentage && (
          <div className="productBadge">
            <span className="pink">-{eachProduct.discountInPercentage}%</span>
          </div>
        )}
        {eachProduct.isNew && (
          <div className="productBadge">
            <span className="purple">New</span>
          </div>
        )}
        <div className="productAction">
          <div className="wishList">
            <button
              className="wishlistButton"
              onClick={()=>addProductInWishlistHandler(eachProduct)}
            >
              <FontAwesomeIcon height="32px" icon={faHeart} />
            </button>
          </div>
          <div className="addCart">
            {eachProduct.itemAvaliable ? (
              <React.Fragment>
                <button className="addCartButton">Buy Now</button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <button className="itemNotAvaliable disabled">
                  Out Of Stock
                </button>
              </React.Fragment>
            )}
          </div>
          <div className="quickView">
            <button className="quickViewButton">
              <FontAwesomeIcon height="32px" icon={faEye} />
            </button>
          </div>
        </div>
      </div>
      <div className="productContent">
        <h3>{eachProduct.productName}</h3>
        <div className="productRating">
          {Array.from(Array(5), (e, i) => {
            return (
              <FontAwesomeIcon
                className="ratingIcon"
                key={eachProduct.id+i}
                style={{ color: i < eachProduct.rating ? "#ffa900" : "black" }}
                height="32px"
                icon={faStar}
              />
            );
          })}
        </div>
        <div className="productPrice">
          {discountPrice ? (
            <React.Fragment>
              <span className="discountPrice">&#8377; {discountPrice}</span>
              <span className="hyper">-</span>
            </React.Fragment>
          ) : null}
          <span
            className={`originalPrice ${discountPrice ? "strikeThrough " : ""}`}
          >
            {" "}
            &#8377; {eachProduct.price}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
const ProductView = (props: any) => {
  const {wishListProducts, addProductInWishlistHandler} = props;
  const addProductInWishlist = (data: any) => {
    console.log("Product View: ", data);
    props.addProductInWishlist(data);
  };
  return (
    <div>
      <section className="productArea">
        <div className="container">
          <div className="sectionTitle">
            <h2>DAILY DEALS!</h2>
          </div>
          <div className="productTabContainer">{renderProductNavItems()}</div>
        </div>
      </section>
      <section className="productContainer">
        {PRODUCT_LIST.map((eachProduct: ProductItem, index) => {
          return (
            <ProductItems
              key={eachProduct.id}
              eachProduct={eachProduct}
              addProductInWishlistHandler={addProductInWishlistHandler}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ProductView;
