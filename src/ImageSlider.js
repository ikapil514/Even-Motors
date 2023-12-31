import { useState } from "react";
import wnexa from "./images/waviro-nexa.webp";
import wql from "./images/waviro-queen-lx.webp";
import wqs from "./images/waviro-queen-sx.webp";
import "./imageSlider.css";
import Jiva from "./jiva";

export default function ImageSlider() {
  const [onSelect, setOnSelect] = useState("WN");

  function btn1() {
    setOnSelect("WN");
  }

  function btn2() {
    setOnSelect("WQL");
  }

  function btn3() {
    setOnSelect("WQS");
  }

  return (
    <div>
      <h1>Waviro Models</h1>
      <div className="diff-product">
        <button
          onClick={btn1}
          className={onSelect === "WN" ? "diff-btn-selected" : "diff-btn"}
        >
          Waviro Nexa
        </button>
        <button
          onClick={btn2}
          className={onSelect === "WQL" ? "diff-btn-selected" : "diff-btn"}
        >
          Waviro Queen Lx
        </button>
        <button
          onClick={btn3}
          className={onSelect === "WQS" ? "diff-btn-selected" : "diff-btn"}
        >
          Waviro Queen Sx
        </button>
      </div>
      {onSelect === "WN" && (
        <div className="product-image-div">
          <h2 className="product-title">Waviro Nexa</h2>
          <div className="img-div">
            <img src={wnexa} className="image" />
          </div>
          <div className="product-div">
            <p className="price">&#8377; 58,300*</p>
            <p className="ptag">
              *Ex-showroom price in <span className="spantag">Delhi</span>
            </p>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      )}
      {onSelect === "WQL" && (
        <div className="product-image-div">
          <h2 className="product-title">Waviro Queen Lx</h2>
          <div className="img-div">
            <img src={wql} className="image" />
          </div>
          <div className="product-div">
            <p className="price">&#8377; 46,800*</p>
            <p className="ptag">
              *Ex-showroom price in <span className="spantag">Delhi</span>
            </p>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      )}
      {onSelect === "WQS" && (
        <div className="product-image-div">
          <h2 className="product-title">Waviro Queen Sx</h2>
          <div className="img-div">
            <img src={wqs} className="image" />
          </div>
          <div className="product-div">
            <p className="price">&#8377; 75,300*</p>
            <p className="ptag">
              *Ex-showroom price in <span className="spantag">Delhi</span>
            </p>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      )}
      <Jiva />
    </div>
  );
}
