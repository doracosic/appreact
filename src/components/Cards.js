import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import ZDriva from '../images/zdriva.jpg';
import ZD from '../images/zd.jpg';
import ZD2 from '../images/zd2.jpg';
import STriva from '../images/striva.jpg';
import Z from '../images/zalazak.jpg';
import TR from '../images/trogir.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>   
          
            <CardItem 
            src={ZDriva}
            text='Take a walk along the Zadar seafront to the sound of the sea organ'
            label='Luxury'
            path='/services'
          />
            <CardItem
              src={ZD}
              text='Enjoy the beautiful views of Zadar'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='images/zd.jpg'>
            <CardItem
              src={STriva}
              text='Delight yourself by drinking the famous Split coffee by the sea'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={ZD2}
              text='Experience beautiful sunsets of the croatian coast'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={TR}
              text='Visit the beautiful Dalmatian city - Trogir '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );  
}

export default Cards;