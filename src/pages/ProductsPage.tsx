import React, { useContext } from 'react';
import { useProduct } from '../hooks/products';
import { ModalContext } from '../context/ModalContext';
import { IProduct } from '../models';
import { Loader } from '../components/Loader';
import Product from '..//components/Product';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';

export function ProductsPage() {
  const { loading, products, addProduct } = useProduct();

  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <>
      <button
        className="  fixed bottom-5 right-5 p-2 rounded-full  bg-yellow-400  text-black  text-md"
        onClick={() => open()}
      >
        Show modal
      </button>

      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}

        {modal && (
          <Modal onClose={() => close()} title="Create new product">
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
      </div>
    </>
  );
}
