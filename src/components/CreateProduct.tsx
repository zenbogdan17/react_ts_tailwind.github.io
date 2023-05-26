import React, { useState, ChangeEvent, FormEvent } from 'react';
import { IProduct } from '../models';
import axios from 'axios';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter valid title.');
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    );

    onCreate(response.data);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-2 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <p className=" text-red-700 mb-2">{error}</p>}

      <button
        type="submit"
        className="py-2 px-4 border bg-black text-white hover:bg-neutral-800"
      >
        Create
      </button>
    </form>
  );
};
