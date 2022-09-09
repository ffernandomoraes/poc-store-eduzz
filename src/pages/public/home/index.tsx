import Footer from '../shared/Footer';
import Topbar from '../shared/Topbar';
import Categories from './Categories';
import Developer from './Developer';
import Hero from './Hero';
import News from './News';

function HomePage() {
  return (
    <>
      <Topbar />
      <Hero />
      <Categories />
      <News />
      <Developer />
      <Footer />
    </>
  );
}
export default HomePage;
