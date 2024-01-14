import React from 'react';
import {
  GallarySearchButton,
  GallarySearchDiv,
  GallarySearchInput,
  GallarySearchSelect,
} from './FormSearch.styled';
import makes from '../../utils/makesModel/makes.json';
import priceHour from '../../utils/makesModel/priceHour.json';
const FormSearch = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('e', e);
  };
  // const makes = [];
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <GallarySearchDiv>
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <label className="searchBarFont">
              Car Brand
              <GallarySearchSelect
                style={{ width: '224px', paddingRight: '89px' }}
                className="searchPlaceholderFont"
              >
                {makes.map(el => (
                  <option key={el}>{el}</option>
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
                {priceHour.map(el => (
                  <option key={el}>{el}</option>
                ))}
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
                name="from"
              />
            </label>
            <label className="searchBarFont">
              <GallarySearchInput
                className="input searchPlaceholderFont"
                placeholder="To"
                type="text"
                name="to"
              />
            </label>
          </div>
          <GallarySearchButton> Search</GallarySearchButton>
        </GallarySearchDiv>
      </form>
    </div>
  );
};

export default FormSearch;
