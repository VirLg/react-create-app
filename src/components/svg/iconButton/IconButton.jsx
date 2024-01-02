import React from 'react';

const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
export default IconButton;
