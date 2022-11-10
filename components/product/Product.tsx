import Image from 'next/image';
import NextLink from '../next-link/NextLink';
import { IProductProps as Props } from './Product.interface';

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className='bg-gray-300 m-3'>
      {/* clickable image */}
      <div>
        <NextLink href={`/product/${product.slug}`}>
          <Image
            src={`${product.image}`}
            // src='/images/shirt1.jpg'
            alt={`${product.name}`}
            width={200}
            height={200}
            priority
          />
        </NextLink>
      </div>

      {/* product info */}
      <div>
        <NextLink href={`/product/${product.slug}`}>
          <h2 className='text-lg'>{product.name}</h2>
        </NextLink>
        <p>{product.brand}</p>
        <p>${product.price}</p>
        <button className=''>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
