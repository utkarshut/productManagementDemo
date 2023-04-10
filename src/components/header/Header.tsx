import React, { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { NAV_ITEMS } from "../../utils/constants";
interface NavItem {
  name: string;
  image: string;
  id: number;
  selected: boolean;
}

const NavBar: FC<{ navItem: NavItem }> = ({ navItem }) => {
  return (
    <div className="navItem" key={navItem.id}>
      {" "}
      <a className={`${navItem.selected ? "active" : "inactive"}`} href="aa">
        {navItem.name}
      </a>
    </div>
  );
};

const Header = (props: any) => {
  // Passing data by use state variable
  const { parentWishListProducts, addProductInWishlistHandler } = props;
  const [wishListProducts, setwishListProducts] = useState(0);

  useEffect(() => {
    setwishListProducts(parentWishListProducts);
    console.log("header", parentWishListProducts);
    setwishListProducts(parentWishListProducts.length);
  }, [parentWishListProducts]);

  const renderNavItems = () => {
    return NAV_ITEMS.map((navItem: any) => {
      return <NavBar key={navItem.id} navItem={navItem} />;
    });
  };
  return (
    <div className="headerContainer">
      <section className="header">
        <div className="brandLogo">
          <img src="/assets/img/support-2.png" alt="" />
        </div>
        <div className="orgName">Craft India</div>
        <div className="navBar">{renderNavItems()}</div>
        <button className="userLogo logo">
          <FontAwesomeIcon className="iconSize" icon={faUser} />
        </button>
        <button className="wishlistLogo logo">
          <FontAwesomeIcon className="iconSize" height="32px" icon={faHeart} />
          <span className="countStyle">{wishListProducts}</span>
        </button>
        <button className="cartLogo logo">
          <FontAwesomeIcon className="iconSize" icon={faCartShopping} />
          <span className="countStyle">0</span>
        </button>
      </section>
    </div>
  );
};
export default Header;
