import Header from '../header/Header';
import React from 'react';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

const arr = [
  'Keep0',
  'Remove1',
  'Keep2',
  'Remove3',
  'Keep4',
  'Remove5',
  'Keep6',
];
function removeEveryOther(arr) {
  let newArr = [];
  const arr2 = arr.filter((_, idx) => idx % 2 !== 0);

  arr2.map((el, idx) => {
    if (idx === 0) {
      newArr.push(el);
    } else if (idx % 2 !== 0) {
      newArr.push(el);
    } else {
      return null;
    }
  });
  console.log('newArr', newArr);
}
removeEveryOther(arr);
