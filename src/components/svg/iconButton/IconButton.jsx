import React from 'react';
import { InonBtn } from './IconButton.styled';

const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <InonBtn onClick={onClick} {...allyProps} style={{}}>
      {children}
    </InonBtn>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
export default IconButton;
