import React, { useState } from 'react';
import {
  GallarySearchButton,
  GallarySearchDiv,
  GallarySearchInput,
  GallarySearchSelect,
} from './FormSearch.styled';
import makes from '../../utils/makesModel/makes.json';
import priceHour from '../../utils/makesModel/priceHour.json';
import { useDispatch } from 'react-redux';
import { searched } from '../../redux/slice';
const FormSearch = () => {
  const [to, setTo] = useState('To');
  const [from, setFrom] = useState('From');
  const [priceState, setPriceState] = useState('10');
  const [makeState, setMakeState] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      searched({
        to,
        from,
        priceState,
        makeState,
      })
    );
  };
  const handleChange = e => {
    e.target.name === 'to' ? setTo(e.target.value) : setFrom(e.target.value);
    if (e.target.name === 'to') {
      setTo(e.target.value);
    } else if (e.target.name === 'from') {
      setFrom(e.target.value);
    } else if (e.target.name === 'priceState') {
      setPriceState(e.target.value);
    } else if (e.target.name === 'makeState') {
      setMakeState(e.target.value);
    } else {
      return null;
    }
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
                onChange={handleChange}
                name="makeState"
                value={makeState}
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
                onChange={handleChange}
                name="priceState"
                value={priceState}
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
                onChange={handleChange}
                name="from"
                value={from}
              />
            </label>
            <label className="searchBarFont">
              <GallarySearchInput
                className="input searchPlaceholderFont"
                placeholder="To"
                type="text"
                onChange={handleChange}
                name="to"
                value={to}
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
