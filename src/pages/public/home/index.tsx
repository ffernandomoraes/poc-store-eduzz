import Footer from '../shared/Footer';
import Topbar from '../shared/Topbar';
import Categories from './Categories';
import Developer from './Developer';
import Hero from './Hero';
import Hot from './Hot';
import News from './News';

function HomePage() {
  return (
    <>
      <Topbar />
      <Hero />
      <Categories />
      <Hot />
      <News />
      <Developer />
      <Footer />
    </>
  );
}
export default HomePage;
