import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Header} from './components/Header';
import {Content} from './components/Content';
import {MintGalaxyPanda} from './components/MintGalaxyPanda';
import {Arriving} from './components/Arriving';
import {DiscoverGalaxyPanda} from './components/DiscoverGalaxyPanda';
import {Collect} from './components/Collect';
import {Attributs} from './components/Attributs';
import {SectionFaq} from './components/SectionFaq';
import {Footer} from './components/Footer';
// import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <>

      <Header />
      <Content/>
      <MintGalaxyPanda />
      <Arriving />
      < DiscoverGalaxyPanda />
      <Collect />
      <Attributs />
      <SectionFaq />
      <Footer />
    </>
  );
}

export default App;
