import './styles.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { dataBase } from '../../utils/database'
import Card from '../../Components/Card';

function Main() {
  return (
    <div className="main">
      <Header />
      {dataBase.map(item => {
        return <Card
          key={item.id}
          mediaLogo={item.mediaLogo}
          mediaLink={item.mediaLink}
          mediaName={item.mediaName}
        />
      })}
      <Footer />
    </div>
  );
}

export default Main;
