import React, { useEffect, useState } from 'react';
import CatalogItem from './CatalogItem';
import { CatalogDiv } from './Catalog.styled';
import Spiner from '../../utils/spiner/Spiner';
import { useSelector } from 'react-redux';
import { searchedSelector, showModalSelector } from '../../redux/selectors';
import ModalWindow from '../modal/ModalWindow';
import ModalCard from '../modal/ModalCard';
import { useGetCarsQuery } from '../../redux/rtkQuery/cars';

const Catalog = () => {
  const [element, setElement] = useState(null);
  const [search, setSearch] = useState(null);
  const showModal = useSelector(showModalSelector);
  const saerchBarValue = useSelector(searchedSelector);
  const handleModal = el => {
    setElement(el);
  };
  const { data, error, isLoading } = useGetCarsQuery();
  useEffect(() => {
    const searchFilterBySearchBar = () => {
      if (saerchBarValue) {
        setSearch(
          data && data.filter(el => el.make === saerchBarValue.makeState)
        );
      } else setSearch(data);
    };
    searchFilterBySearchBar();
  }, [data, saerchBarValue]);
  return (
    <div
      className="container"
      style={{
        boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)`,
        position: 'relative',
      }}
    >
      {isLoading && <Spiner />}
      <CatalogDiv className="container">
        <CatalogItem search={search} handleModal={handleModal} />
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
