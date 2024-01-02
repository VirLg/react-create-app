import React from 'react';
import { ItemDiv, ItemImg } from '../catalog/Catalog.styled';

const FavoriteItem = ({ favorite }) => {
  return (
    favorite &&
    favorite.map((el, idx) => {
      return (
        <ItemDiv key={idx}>
          <div style={{ width: '300px', height: '300px' }}>
            <ItemImg src={el.img} alt="" />
          </div>
          <div>{el.model}</div>
          <div>{el.make}</div>
          {/* <button> Learn More</button> */}
        </ItemDiv>
      );
    })
  );
};

export default FavoriteItem;
