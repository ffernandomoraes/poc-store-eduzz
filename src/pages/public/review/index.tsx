import Head from 'next/head';

import Footer from '../shared/Footer';
import Topbar from '../shared/Topbar';
import Details from './Details';

function ReviewPage() {
  return (
    <>
      <Head>
        <title>Eduzz Store | Nutror</title>
      </Head>
      <Topbar />
      <Details />
      <Footer />
    </>
  );
}
export default ReviewPage;
