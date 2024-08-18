import React from 'react';
import data from './data.js';
import { useState } from 'react';

function HomeComponent() {
  let [shoes] = useState(data);

  return (
    <div className="HomeComponent">
      <div className="container">
        <div className="row">
          {shoes.map((shoe, index) => (
            <div className="col-md-4" key={index}>
              <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" alt={shoe.title} />
              <h4>{shoe.title}</h4>
              <p>{shoe.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
