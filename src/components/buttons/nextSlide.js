import React from 'react';

function NextSlide(props) {

  const nextQuestion = () => {
    props.onSlideChange(props.currentQuestion + 1);
    props.onAnswered(false);
  }

  return (
    <div onClick={nextQuestion} className="quiz__next-question">Продолжить</div>
  );
}

export default NextSlide;