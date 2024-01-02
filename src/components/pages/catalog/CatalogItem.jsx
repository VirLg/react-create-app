import React from 'react';
import {
  ButtonElementCard,
  InfoTumb,
  ItemDiv,
  ItemImg,
} from './Catalog.styled';
import HomeSvg from 'components/svg/HomeSvg';
import { useDeleteCarMutation } from 'components/redux/rtkQuery/cars';
import { useDispatch } from 'react-redux';
import { favorite, modalShow } from 'components/redux/slice';

const CatalogItem = ({ data, favoriteArr, handleModal }) => {
  const [deleteCar, result] = useDeleteCarMutation();
  console.log('result', result);
  const dispatch = useDispatch();
  const handleFavorite = el => {
    dispatch(favorite(el));
  };
  const handleLearnMore = el => {
    dispatch(modalShow(true));
    handleModal(el);
  };
  return (data || favoriteArr || []).map((el, idx) => {
    return (
      <div key={idx}>
        <ItemDiv className="relative">
          <div>
            <ItemImg src={el.img} alt="" />
            <button className="absolute" onClick={() => handleFavorite(el)}>
              <HomeSvg />
            </button>
          </div>

          <InfoTumb>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                <div className="titleFont">{el.make}</div>
                <div className="titleFont">{el.model}, </div>
                <div className="titleFont">{el.year}</div>
              </div>
              <div>{el.rentalPrice}</div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div className="seconadaryFont">
                {el.address.split(',').splice(1, 2)}
              </div>
              <div className="seconadaryFont">{el.rentalCompany}</div>
              <div className="seconadaryFont">Premium</div>
            </div>
            <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
              <div className="seconadaryFont">{el.type}</div>
              <div className="seconadaryFont">{el.make}</div>
              <div className="seconadaryFont">{el.mileage}</div>
            </div>
          </InfoTumb>

          <ButtonElementCard
            className="btnAbsoluteOne "
            onClick={() => handleLearnMore(el)}
          >
            Learn More
          </ButtonElementCard>
          <ButtonElementCard
            className="btnAbsoluteTwo "
            onClick={() => deleteCar(el._id)}
          >
            Delete
          </ButtonElementCard>
        </ItemDiv>
      </div>
    );
  });
};

export default CatalogItem;

//
// import React, { useEffect } from 'react';
// import car from '../../../advertsCars.json';
// import { ItemDiv, ItemImg } from './Catalog.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { get } from 'components/redux/slice';
// import {
//   getAllCarCatalogSelector,
//   getElFavoriteSelector,
//   getItemSelector,
// } from 'components/redux/selectors';
// import { fav, favDel } from 'components/redux/sliseFavorite';
// import HomeSvg from 'components/svg/HomeSvg';
// import { thunkGetAllCars } from 'components/redux/thunksCar/thunkCar';
// import { getAllCarCatalog } from 'api/apiCarCatalog';

// const CatalogItem = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(thunkGetAllCars(getAllCarCatalog()));
//     // dispatch(get(car));
//   }, [dispatch]);

//   const getItemState = useSelector(getAllCarCatalogSelector);
//   console.log('getItemState', getItemState);
//   const favoriteArr = useSelector(getElFavoriteSelector);
//   console.log('favoriteArr', favoriteArr);
//   const handleFavorite = element => {
//     dispatch(fav(element));
//   };
//   return (
//     getItemState &&
//     getItemState.map((el, idx) => {
//       console.log('el.img', el.img);
//       return (
//         <ItemDiv key={idx}>
//           <div style={{ width: '300px', height: '300px' }}>
//             <ItemImg src={el.img} alt="" />

//             <HomeSvg />
//           </div>

//           <div>{el.year}</div>
//           <div>{el.make}</div>
//           <div>{el.model}</div>
//           <div>{el.type}</div>

//           <button onClick={() => handleFavorite(el)}> Learn More</button>
//         </ItemDiv>
//       );
//     })
//   );
// };

// export default CatalogItem;
