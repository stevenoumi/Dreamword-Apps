import "../style/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import FavoriteList from "../components/FavoriteList";

function Orders() {
  const title = "Mes Commandes";
  return (
    <div className="favorite-back">
      <Header />
      <Title title={title} backgroundColor="black" textColor="#DCC097" />
      <FavoriteList />
      <Footer />
    </div>
  );
}

export default Orders;
