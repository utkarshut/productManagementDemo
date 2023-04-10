import React, { FC } from "react";
import "./caraousal.css";

const renderCaraousal = () => {
  return (
    <div className="carousalContainer">
      <div className="row">
        <div className="alignContentCenter col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
          <div className="sliderContent">
            <h3 className="animated">Smart Products</h3>
            <h1 className="animated">
              Summer Offer <br />
              2024 Collection
            </h1>
            <div className="sliderButton">
              <a className="animated" href="/shop-grid-standard">
                <button className="button">Shop Now</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
          <div className="sliderImage">
            <img src="/assets/img/single-2.png" alt="slider" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Caraousal: FC = () => {
  return <section className="caraousalSection">{renderCaraousal()}</section>;
};
export default Caraousal;
