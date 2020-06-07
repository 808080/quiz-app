import React from 'react';

function Intro(props) {

  return (
    <div className="quiz__intro">
      <span className="quiz__test">Тест</span>
      <h2 className="quiz__heading">Как хорошо вы разбираетесь в новостях бизнеса</h2>
      <p>По следам публикаций на vc.ru.</p>

      <button className="quiz__btn quiz__btn-begin" onClick={() => props.onSlideChange(1)}>Начать</button>
    </div>
  );
}

export default Intro;
