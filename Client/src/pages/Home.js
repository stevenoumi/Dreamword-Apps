import '../style/App.css';
import Header from '../components/Header';
import ShoppingList from '../components/ShoppingList';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header/>
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default Home;
