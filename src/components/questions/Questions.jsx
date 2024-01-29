import React from 'react';
import QuestionItem from './QuestionItem';
import { QuestionDiv } from './Questions.styled';

const Questions = () => {
  return (
    <QuestionDiv className="container">
      <p
        className="titleFont"
        style={{ margin: '0', fontSize: '28px', marginLeft: '46px' }}
      >
        Popular Question :
      </p>
      <ul style={{ marginLeft: '26px' }}>
        <QuestionItem />
      </ul>
    </QuestionDiv>
  );
};

export default Questions;
