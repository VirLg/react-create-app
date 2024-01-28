import React, { useState } from 'react';
import QuestionItem from './QuestionItem';

const Questions = () => {
  const [showQueston, setShowQueston] = useState(false);

  return (
    <>
      <p>Popular Question :</p>{' '}
      <ul>
        <QuestionItem />
      </ul>
    </>
  );
};

export default Questions;
