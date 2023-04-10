import React, { useState } from "react";
import Header from "../../header/Header";
import "./productInfo.css";
import { url } from "inspector";

const ProductInfo = () => {
  const [wishListProducts, setWishlistItem] = useState<any[]>([]);
  const addProductInWishlistHandler = () => {};

  return (
    <>
      <Header
        parentWishListProducts={wishListProducts}
        addProductInWishlistHandler={addProductInWishlistHandler}
      />
      <div className="productNavigation">
        Home / Clothing /Men Clothing / <b>Tshirts</b>
      </div>
      <div className="productInfoContainer">
        <div className="productInfoImage">
          <div className="productImageItem">
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg"
              alt="an"
            />
          </div>
          <div className="productImageItem">
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2275365/2022/11/22/03827a7f-2e32-45bd-9201-51b13d3142e11669105782414-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-2.jpg"
              alt="an"
            />
          </div>
          <div className="productImageItem">
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2275365/2022/11/22/ef55fd5e-8ba8-432e-9105-137fde7311401669105782390-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-3.jpg"
              alt="an"
            />
          </div>
          <div className="productImageItem">
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2275365/2022/11/22/94084024-e1a1-4916-a37c-4b635b35ecf61669105782361-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-4.jpg"
              alt="an"
            />
          </div>
        </div>
        <div className="productInfo">
          <div className="productInfoTitle">Roadster</div>
          <div className="productInfoName">Men White Pure Cotton T-shirt</div>
          <div className="productInfoRating">4.2 star</div>
          <div className="productInfoPrice">
            {true ? (
              <React.Fragment>
                <span className="discountPrice">&#8377; {300}</span>
                <span className="hyper">-</span>
              </React.Fragment>
            ) : null}
            <span className={`originalPrice ${true ? "strikeThrough " : ""}`}>
              {" "}
              &#8377; {500}{" "}
            </span>
          </div>
          <div className="selectColor">
            <span className="className">Color</span>
          </div>
          <div className="colorOption">
            <span className="colorDot colorDotActive" style={{backgroundColor:'red'}}></span>
            <span className="colorDot" style={{backgroundColor:'white'}}></span>
            <span className="colorDot" style={{backgroundColor:'black'}}></span>
            <span className="colorDot" style={{backgroundColor:'blue'}}></span>
          </div>
          <div className="selectSize">
            <span className="selectSizeLabel">SELECT SIZE</span>
            <span> SIZE CHART</span>
          </div>
          <div className="sizeChartOption">
          <span className="sizeChartStyle">M</span>
          <span className="sizeChartStyle">L</span>
          <span className="sizeChartStyle">XL</span>
          <span className="sizeChartStyle">XXL</span>
          </div>
          <div className="productManageButtons">
            <button>
                ADD TO CART
            </button>
            <button>
                WISHLIST
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
