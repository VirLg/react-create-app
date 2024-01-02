import React from 'react';
import {
  H1,
  H2,
  H3,
  ModalWindowImg,
  RentalCar,
  Span,
} from './ModalWindow.styled';

const ModalCard = ({ element }) => {
  return (
    <>
      <ModalWindowImg src="" alt="" />
      <p>
        <H1>
          {element.make} {element.model} {element.year}
        </H1>
        <H2>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.{' '}
        </H2>
        <h1>hello</h1>
        <H3>{element.accessories}</H3>
        <H3>Rental conditions : </H3>
        <Span>Minimum age : {element.minimumAge}</Span>
        <Span>Valid driver's licension</Span>
        <Span>Security deposite required : </Span>
        <Span>Milage :{element.mileage} </Span>
        <Span>Price : {element.rentalPrice}</Span>
      </p>
      <RentalCar>Rental car</RentalCar>
    </>
  );
};

export default ModalCard;
