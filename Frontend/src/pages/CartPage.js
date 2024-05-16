import "../style/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import CartList from "../components/CartList";

function Cart() {
  const title = "Mon Panier";
  return (
    <div>
      <Header />
      <Title title={title} backgroundColor="aquamarine" textColor="inherit" />
      <CartList />
      <Footer />
    </div>
  );
}

export default Cart;
