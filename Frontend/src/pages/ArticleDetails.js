import '../style/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from '../components/Details';
import { useParams } from 'react-router-dom';
import { ItemList } from '../datas/ItemList';
import { Typography } from '@mui/material';


function ArticleDetails() {
  const { id } = useParams();
  const itemId = parseInt(id);

  const selectedItem = ItemList.find(item => item.id === itemId);

  if (!selectedItem) {
    return <Typography variant="h4">Article non trouvé</Typography>;
  }

  return (
    <div>
      <Header/>
      <Details selectedItem={selectedItem}/>
      <Footer/>
    </div>
  );
}

export default ArticleDetails;
