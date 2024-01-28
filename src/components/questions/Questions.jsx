import React from 'react';
import QuestionItem from './QuestionItem';
import { QuestionDiv } from './Questions.styled';

const Questions = () => {
  return (
    <QuestionDiv>
      <p
        className="titleFont"
        style={{ margin: '0', fontSize: '28px', paddingLeft: '26px' }}
      >
        Popular Question :
      </p>
      <ul>
        <QuestionItem />
      </ul>
    </QuestionDiv>
  );
};

export default Questions;
