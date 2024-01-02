import React from 'react';
import {
  GallarySearchButton,
  GallarySearchDiv,
  GallarySearchInput,
  GallarySearchSelect,
} from './FormSearch.styled';
import makes from '../../../makes.json';
const FormSearch = () => {
  return (
    <div>
      <GallarySearchDiv>
        <div style={{ display: 'flex', alignItems: 'end' }}>
          <label className="searchBarFont">
            Car Brand
            <GallarySearchSelect
              style={{ width: '224px', paddingRight: '89px' }}
              className="searchPlaceholderFont"
            >
              {makes.map(el => (
                <option>{el}</option>
              ))}
            </GallarySearchSelect>
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'end' }}>
          <label className="searchBarFont">
            Price / 1 hour
            <GallarySearchSelect
              style={{ width: '125px', paddingRight: '18px' }}
              className="searchPlaceholderFont"
            >
              placeholder="To $"
              <option>To $</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
              <option>60</option>
              <option>70</option>
            </GallarySearchSelect>
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'end' }}>
          <label className="searchBarFont">
            Car mileage / km
            <GallarySearchInput
              style={{ marginRight: '0' }}
              className="input searchPlaceholderFont"
              placeholder="From"
              type="text"
            />
          </label>
          <label className="searchBarFont">
            <GallarySearchInput
              className="input searchPlaceholderFont"
              placeholder="To"
              type="text"
            />
          </label>
        </div>
        <GallarySearchButton> Search</GallarySearchButton>
      </GallarySearchDiv>
    </div>
  );
};

export default FormSearch;
