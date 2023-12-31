import "./App.css";
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div className="main-div">
      <div className="navbar-div">
        <div className="logo-box"></div>
        <button className="home-btn">Home</button>
      </div>
      <div>
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
