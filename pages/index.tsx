import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Amazon Home Page</title>
        <meta name='description' content='Amazon Ecommerce Website clone' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/* page content*/}
      <div>
        <p className='text-3xl font-bold'>Hello world!</p>
      </div>
    </>
  );
};

export default Home;
