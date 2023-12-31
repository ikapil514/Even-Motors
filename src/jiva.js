import { useState } from "react";
import jv from "./images/jiva-vista.jpg";
import jf from "./images/jiva-fusion.jpg";
import jt from "./images/jiva-trivo.jpg";
import "./imageSlider.css";
import { Divider, Button } from "@mui/material";

export default function Jiva() {
  const [onSelect, setOnSelect] = useState("JT");

  function btn1() {
    setOnSelect("JV");
  }

  function btn2() {
    setOnSelect("JF");
  }

  function btn3() {
    setOnSelect("JT");
  }

  function handleContactEmail() {
    alert("Send Email on xxxxx@gmail.com");
  }

  return (
    <div>
      <h1>Jiva Models</h1>
      <div className="diff-product">
        <button
          onClick={btn3}
          className={
            onSelect === "JT" ? "diff-btn-jiva-selected" : "diff-btn-jiva"
          }
        >
          Jiva Trivo
        </button>
        <button
          onClick={btn2}
          className={
            onSelect === "JF" ? "diff-btn-jiva-selected" : "diff-btn-jiva"
          }
        >
          Jiva Fusion
        </button>
        <button
          onClick={btn1}
          className={
            onSelect === "JV" ? "diff-btn-jiva-selected" : "diff-btn-jiva"
          }
        >
          Jiva Vista
        </button>
      </div>
      {onSelect === "JV" && (
        <div className="product-image-div">
          <h2 className="product-title">Jiva Vista</h2>
          <div className="img-div">
            <img src={jv} className="image" />
          </div>
          <div className="product-div">
            <p className="price">&#8377; 54,800*</p>
            <p className="ptag">
              *Ex-showroom price in <span className="spantag">Delhi</span>
            </p>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      )}
      {onSelect === "JF" && (
        <div className="product-image-div">
          <h2 className="product-title">Jiva Fusion</h2>
          <div className="img-div">
            <img src={jf} className="image" />
          </div>
          <div className="product-div">
            <p className="price">&#8377; 54,000*</p>
            <p className="ptag">
              *Ex-showroom price in <span className="spantag">Delhi</span>
            </p>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      )}
      {onSelect === "JT" && (
        <div className="product-image-div">
          <h2 className="product-title">Jiva Trivo</h2>
          <div className="img-div">
            <img src={jt} className="image" />
          </div>
          <div className="product-div">
            <p className="price">&#8377; 53,500*</p>
            <p className="ptag">
              *Ex-showroom price in <span className="spantag">Delhi</span>
            </p>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      )}
      <Button
        fullWidth
        variant="contained"
        onClick={handleContactEmail}
        style={{ backgroundColor: "black", fontWeight: "600", color: "white" }}
      >
        Contact Us
      </Button>
    </div>
  );
}
