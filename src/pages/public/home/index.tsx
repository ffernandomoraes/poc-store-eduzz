import Footer from '../shared/Footer';
import Categories from './components/Categories';
import Developer from './components/Developer';
import Hero from './components/Hero';
import News from './components/News';
import Topbar from './components/Topbar';

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
