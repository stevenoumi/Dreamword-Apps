import "../style/App.css";
import ShoppingList from "../components/ShoppingList";
import Footer from "../components/Footer";
import SmallHeader from "../components/SmallHeader";

function Products() {
  return (
    <div>
      <SmallHeader />
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default Products;
