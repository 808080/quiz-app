import React from 'react';

function RestartBtn(props) {

  const restart = () => {
    props.onSlideChange(1);
    props.onCorrectAnswer(0);
  }

  return (
    <div onClick={restart} className="quiz__restart">Пройти еще раз</div>
  );
}

export default RestartBtn;