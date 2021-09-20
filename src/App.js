import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from './components/Header';
import {Content} from './components/Content';
import {MintGalaxyPanda} from './components/MintGalaxyPanda';
import {Arriving} from './components/Arriving';
import {DiscoverGalaxyPanda} from './components/DiscoverGalaxyPanda';
import {Collect} from './components/Collect';
import {Attributs} from './components/Attributs';
import {SectionFaq} from './components/SectionFaq';
import {Footer} from './components/Footer';

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
