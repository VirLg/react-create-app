import React, { useState } from 'react';
import { arr } from './questionsContent';
const QuestionItem = () => {
  const [togle, setTogle] = useState(null);
  const handleClick = idx => {
    if (togle !== idx) {
      setTogle(idx);
    } else {
      setTogle(null);
    }
  };
  return arr.map((el, idx) => {
    if (idx !== togle) {
      return (
        <li onClick={() => handleClick(idx)} key={idx}>
          <p>{el.title}</p>
        </li>
      );
    } else {
      return (
        <li onClick={() => handleClick(idx)}>
          <p>{el.title}</p>

          <div>
            <p>{el.context}</p>
          </div>
        </li>
      );
    }
  });
};

export default QuestionItem;
