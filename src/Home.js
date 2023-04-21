import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function Home() {
  const [product, setProduct] = useState([]); //orignal data
  const [cart, setCart] = useState([]); // cart

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDeleteClick() {
    const removeItem = cart.filter((item, index) => {
      return item.id !== '';
    });
    setCart(removeItem);
  }
  return (
    <>
      {product?.map((item, index) => {
        return (
          <>
            <div>
              <h1 key={index}>{item.title}</h1>
              <img src={item.thumbnail} alt="" />
              <h2 style={{ color: 'red' }}>{item.price}</h2>
              <h3>Rating:-{item.rating}</h3>
              <div>
                {' '}
                {item.stock < 50 ? (
                  <p style={{ color: 'red' }}>Hurry Up </p>
                ) : (
                  ''
                )}{' '}
              </div>
              <button onClick={() => setCart([...cart, product[index]])}>
                Add To Cart
              </button>
            </div>
          </>
        );
      })}
    </>
  );
}
