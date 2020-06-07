import React from 'react';

import BtnStyled from './btnStyled';

function Variant(props) {

  const handleClick = () => {
    props.onAnswered(true);
    props.getAnswer(props.answer);
    props.isCorrect(props.correct);
    props.getNote(props.note);
  }

  return (
    <BtnStyled onClick={handleClick}>{props.answer}</BtnStyled>
  );
}

export default Variant;