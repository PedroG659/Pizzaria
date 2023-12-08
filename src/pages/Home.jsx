import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pizzaria </h1>
        <p> PIZZA PARA QUALQUER GOSTO </p>
        <Link to="/menu">
          <button> PEÇA AGORA </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;