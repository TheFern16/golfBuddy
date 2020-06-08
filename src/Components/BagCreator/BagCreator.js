import React from 'react';
import ClubOptions from './ClubOptions/ClubOptions.js';
import YourBag from './YourBag/YourBag.js';
import './BagCreator.css';

function BagCreator(props) {

  function handleChange(event) {
    return props.setUsername({ username: event.target.value });
  };

  function handleSubmit(event) {
    if (props.username.username.length > 0) {
      const reqBody = {
        username: props.username,
        driver: props.bag.driver,
        woods: props.bag.woods,
        hybrids: props.bag.hybrids,
        irons: props.bag.irons,
        wedges: props.bag.wedges,
        putter: props.bag.putter
      }
      return props.saveBag('POST', reqBody, 'save');
    }
  };

  return (
    <div className="container">
      <div className="bagCreatorTopContainer">
        <div>
          <h2>Bag Creator</h2>
          <h6>Add your clubs and create your own pdf</h6>
        </div>
        <div className="usernameContainer">
          <label>Enter username:</label>
          <input name="username" onChange={handleChange} />
          <button name="save" onClick={handleSubmit}>Save Bag</button>
        </div>
      </div>
      <div className="bagCreatorContainer">
        <ClubOptions
          bag={props.bag}
          brands={props.brands}
          flexOptions={props.flexOptions}
          clubTypeNumbers={props.clubTypeNumbers}
          createNewClub={props.createNewClub}
          newClub={props.newClub}
          setNewClubValue={props.setNewClubValue}
        />
        <YourBag
          bag={props.bag}
          bagSize={props.bagSize}
          removeClub={props.removeClub}
        />
      </div>
    </div>
  )
};

export default BagCreator;