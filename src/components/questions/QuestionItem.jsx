import React, { useState } from 'react';
import { arr } from './questionsContent';
import { QuestionContentmDiv, QuestionItemDiv } from './Questions.styled';
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
          <QuestionItemDiv>
            <p style={{ margin: '0px', fontSize: '28px' }}>{el.title}</p>
          </QuestionItemDiv>
        </li>
      );
    } else {
      return (
        <li onClick={() => handleClick(idx)}>
          <QuestionItemDiv>
            <p
              className="titleFont"
              style={{ margin: '0px', fontSize: '28px' }}
            >
              {el.title}
            </p>
          </QuestionItemDiv>

          <QuestionContentmDiv>
            <p
              className="titleFont"
              style={{ margin: '0px', fontSize: '22px' }}
            >
              {el.context}
            </p>
          </QuestionContentmDiv>
        </li>
      );
    }
  });
};

export default QuestionItem;
