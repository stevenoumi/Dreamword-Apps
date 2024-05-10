import "../style/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import FavoriteList from "../components/FavoriteList";

function Favorite() {
  const title = "Mes Favoris";
  return (
    <div>
      <Header />
      <Title title={title} backgroundColor="antiquewhite" textColor="inherit" />
      <FavoriteList />
      <Footer />
    </div>
  );
}

export default Favorite;
