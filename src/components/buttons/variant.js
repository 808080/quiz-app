import React from 'react';

function Variant(props) {

  const handleClick = () => {
    props.onAnswered(true);
    props.getAnswer(props.answer);
    props.isCorrect(props.correct);
    props.getNote(props.note);
  }

  return (
    <button className="quiz__btn" onClick={handleClick}>{props.answer}</button>
  );
}

export default Variant;