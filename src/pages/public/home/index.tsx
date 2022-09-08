import Footer from '../shared/Footer';
import Developer from './components/Developer';
import Hero from './components/Hero';
import News from './components/News';
import Topbar from './components/Topbar';

function HomePage() {
  return (
    <>
      <Topbar />
      <Hero />
      <News />
      <Developer />
      <Footer />
    </>
  );
}
export default HomePage;
