import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderDiv, LinkSpan } from './Header.styled';
import FormSearch from '../pages/searcBar/FormSearch';

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
            fontSize: '50px',
            fontWeight: 'bold',
            color: 'rgba(18, 20, 23, 0.6)',
            textShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.6), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
          }}
          to="/"
        >
          <LinkSpan>Home</LinkSpan>
        </NavLink>
        <NavLink
          style={{
            textDecoration: 'none',

            fontSize: '50px',
            fontWeight: 'bold',
            color: 'rgba(18, 20, 23, 0.6)',
            textShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.6), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
          }}
          to="/api/cars/catalog"
        >
          <LinkSpan>Catalog</LinkSpan>
        </NavLink>
        <NavLink
          style={{
            textDecoration: 'none',
            fontSize: '50px',
            fontWeight: 'bold',
            color: 'rgba(18, 20, 23, 0.6)',
            textShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.6), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
          }}
          to="/api/cars/favorite"
        >
          <LinkSpan>Favorite</LinkSpan>
        </NavLink>
        <NavLink
          style={{
            textDecoration: 'none',
            fontSize: '50px',
            fontWeight: 'bold',
            color: 'rgba(18, 20, 23, 0.6)',
            textShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.6), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
          }}
          to="/api/cars/add"
        >
          <LinkSpan>ADD car to Catalog</LinkSpan>
        </NavLink>
      </div>
      <div>
        <FormSearch />
      </div>
    </HeaderDiv>
  );
};

export default Header;
