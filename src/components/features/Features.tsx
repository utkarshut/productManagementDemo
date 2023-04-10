import React, { FC } from "react";
import "./features.css";
import { FEATURE_ITEMS } from "../../utils/constants";

const renderFeature = () => {
  return FEATURE_ITEMS.map((eachFeature) => {
    return (
      <div key={eachFeature.id} className="featureItem col-lg-3 col-sm-6">
        <img className="featureImage" alt="addd" src={eachFeature.image} />
        <div className="featureDetails">
          <h5 className="featurelabel">{eachFeature.name}</h5>
          <div className="featureDetail">{eachFeature.detail}</div>
        </div>
      </div>
    );
  });
};
const Features: FC = () => {
  return <section className="featureSection">{renderFeature()}</section>;
};
export default Features;
