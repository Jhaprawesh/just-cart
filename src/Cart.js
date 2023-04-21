import React from 'react';

import './style.css';

export default function Cart({cart}) {
  return (
    <>
      <div>
        {cart?.map((item, index) => {
          console.log(cart);
          return (
            <>
              <div key={index}>
                {/* {item?.images?.map((img, index) => {
                  return (
                    <div key={index}>
                      ;
                      <img src={img} alt="" />
                    </div>
                  );
                })} */}
                <h1>{item.title}</h1>
                <img src={item.thumbnail} alt="" />
                <h2>{item.price}</h2>
                <h3>Rating:-{item.rating}</h3>
                <button onChange={() => handleDeleteClick}>Remove</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
