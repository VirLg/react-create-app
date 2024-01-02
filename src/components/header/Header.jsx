import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderDiv } from './Header.styled';
import FormSearch from 'components/pages/searcBar/FormSearch';

const Header = () => {
  return (
    <HeaderDiv>
      <div
        style={{
          display: 'flex',
          gap: '58px',
        }}
        className="searchPlaceholderFont "
      >
        <NavLink
          style={{
            textDecoration: 'none',
            fontSize: '46px',
            fontWeight: 'bold',
            color: 'rgba(18, 20, 23, 0.6)',
            textShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={{
            textDecoration: 'none',
            fontSize: '46px',
            fontWeight: 'bold',
            color: 'rgba(18, 20, 23, 0.6)',
            textShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
          }}
          to="/api/cars/catalog"
        >
          Catalog
        </NavLink>
        <NavLink
          style={{
            textDecoration: 'none',
            fontSize: '46px',
            fontWeight: 'bold',
            color: 'rgba(18, 20, 23, 0.6)',
            textShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
          }}
          to="/api/cars/favorite"
        >
          Favorite
        </NavLink>
        <NavLink
          style={{
            textDecoration: 'none',
            fontSize: '46px',
            fontWeight: 'bold',
            color: 'rgba(18, 20, 23, 0.6)',
            textShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
          }}
          to="/api/cars/add"
        >
          ADD car to Catalog
        </NavLink>
      </div>
      <div>
        <FormSearch />
      </div>
    </HeaderDiv>
  );
};

export default Header;
