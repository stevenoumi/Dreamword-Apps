import "../style/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import FavoriteList from "../components/FavoriteList";

function Favorite() {
  const title = "Mes Favoris";
  return (
    <div className="favorite-back">
      <Header />
      <Title title={title} backgroundColor="black" textColor="#DCC097" />
      <FavoriteList />
      <Footer />
    </div>
  );
}

export default Favorite;
