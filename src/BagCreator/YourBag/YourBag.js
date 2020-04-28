import React from 'react';
import './YourBag.css';

function formatClubs(array) {
  return (
    <ul>
      {
        array.map((wood, key) =>
           <li key={key}>{wood.type} {wood.brand}</li>
        )
      }
    </ul>
  )
};

function YourBag({ bag }) {
  return (
    <div className="yourBagContainer">
      <h6>Your Bag</h6>
      <h6>Driver --- { bag.driver }</h6>
      <h6>Woods --- { formatClubs(bag.woods) }</h6>
      <h6>Hybrids --- { formatClubs(bag.hybrids) }</h6>
      <h6>Irons --- { formatClubs(bag.irons) }</h6>
      <h6>Wedges --- { formatClubs(bag.wedges) }</h6>
      <h6>Putter --- { bag.putter }</h6>
    </div>
  )
};

export default YourBag;