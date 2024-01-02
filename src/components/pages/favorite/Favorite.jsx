import React from 'react';
import { CatalogDiv } from '../catalog/Catalog.styled';

import CatalogItem from '../catalog/CatalogItem';
import { useSelector } from 'react-redux';
import { favoriteSelector } from 'components/redux/selectors';

const Favorite = () => {
  const favoriteArr = useSelector(favoriteSelector);
  return (
    <div
      style={{
        boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
      }}
      className="container"
    >
      <CatalogDiv className="container">
        <CatalogItem favoriteArr={favoriteArr} />
      </CatalogDiv>
    </div>
  );
};

export default Favorite;
