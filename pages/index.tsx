import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Product from '../components/product/Product';
import { IHomeProps as Props } from './index.interface';

const Home: NextPage<Props> = ({ products }) => {
  console.log('products ', products);

  return (
    <>
      <Head>
        <title>Amazon Home Page</title>
        <meta name='description' content='Amazon Ecommerce Website clone' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      {/* home page content*/}
      <div>
        {products.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:5000/products');
  const products = await res.json();

  return {
    props: { products },
  };
};
export default Home;
