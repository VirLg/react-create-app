import React, { useState } from 'react';
import CatalogItem from './CatalogItem';
import { CatalogDiv } from './Catalog.styled';
import { useGetCarsQuery } from 'components/redux/rtkQuery/cars';

import { useSelector } from 'react-redux';
import { showModalSelector } from 'components/redux/selectors';
import ModalWindow from '../modal/ModalWindow';
import ModalCard from '../modal/ModalCard';
const Catalog = () => {
  const [element, setElement] = useState(null);
  const showModal = useSelector(showModalSelector);
  const handleModal = el => {
    setElement(el);
  };
  const { data, error, isLoading } = useGetCarsQuery();
  console.log('first', error);
  console.log('first', isLoading);
  return (
    <div
      className="container"
      style={{
        boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
      }}
    >
      <CatalogDiv className="container">
        <CatalogItem data={data} handleModal={handleModal} />
      </CatalogDiv>
      {showModal && (
        <ModalWindow>
          <ModalCard element={element} />
        </ModalWindow>
      )}
    </div>
  );
};

export default Catalog;
