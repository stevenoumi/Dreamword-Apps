import '../style/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';

function Contact() {
        const title = "Contactez-nous";
        // const backgroundColor couleur de contact 
        const backgroundColor = "purple";
        const textColor="white";
        
    return (
        <div>
            <Header/>
                <Title color="inherit" title={title} backgroundColor={backgroundColor} textColor={textColor}/>
            <Footer/>
        </div>
    );
}

export default Contact;
