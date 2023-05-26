import { IProduct } from '../models';
import { useState } from 'react';
interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [isVisibility, setIsVisibility] = useState(false);
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6 " alt={product.title} />

      <p> {product.title}</p>
      <span className="font-bold"> {product.price}</span>

      {isVisibility && (
        <p>
          {product.description + ' '}
          <br />
          Rate:{' '}
          <span style={{ fontWeight: 'bold' }}>{product.rating?.rate}</span>
        </p>
      )}

      <button
        onClick={() => setIsVisibility(!isVisibility)}
        className="py-2 px-4 border bg-black text-white rounded-lg "
      >
        {!isVisibility ? 'Show Details' : 'Hide Details'}
      </button>
    </div>
  );
};

export default Product;
