import "../style/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import LocationMap from "../components/LocationMap";

function ContactPage() {
  const points = [
    { name: 'Restaurant Dreamworld Angers', lat: 47.478419, lng: -0.563166 },
    { name: 'Restaurant Dreamworld Bordeaux', lat: 44.837789, lng: -0.57918 },
    { name: 'Restaurant Dreamworld Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Restaurant Dreamworld Lyon', lat: 45.764043, lng: 4.835659 },
    { name: 'Restaurant Dreamworld Marseille', lat: 43.296482, lng: 5.36978 },
    { name: 'Restaurant Dreamworld Lille', lat: 50.62925, lng: 3.057256 },
  ];
  

  return (
    <div>
      <Header />
          <Contact />
          <LocationMap points={points}/>
      <Footer />
    </div>
  );
}

export default ContactPage;
