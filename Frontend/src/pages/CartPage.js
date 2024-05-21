import "../style/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FinalCart from "../components/FinalCart";

function CartPage() {
  return (
    <div className="favorite-back">
      <FinalCart />
      <Footer />
    </div>
  );
}

export default CartPage;
