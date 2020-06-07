import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  VKShareButton,
  VKIcon
} from "react-share";

import RestartBtn from 'components/buttons/restartBtn';

import results from 'data/results.json';
import { NUMBER_OF_QUESTIONS } from 'App';

function Result(props) {

  let res;

  switch (true) {
    case props.correctAnswers === 8:
      res = results[4];
      break;
    case props.correctAnswers > 5 && props.correctAnswers <= 7:
      res = results[3];
      break;
    case props.correctAnswers > 3 && props.correctAnswers <= 5:
      res = results[2];
      break;
    case props.correctAnswers > 0 && props.correctAnswers <= 3:
      res = results[1];
      break;
    default:
      res = results[0];
      break;
  }

  return (
    <div className="quiz__result">
      <p className="quiz__total">{props.correctAnswers} из {NUMBER_OF_QUESTIONS} правильных ответов</p>
      <h3 className="quiz__res-text">{res.text}</h3>

      <div className="quiz__share">
        <FacebookShareButton
          url="https://808080.github.io/quiz-app-build/"
          quote={res.text}>
          <FacebookIcon size={50} bgStyle={{fill: 'white'}} iconFillColor="#4267B2" />
          <span>Поделиться</span>
        </FacebookShareButton>
        <VKShareButton
          url="https://808080.github.io/quiz-app-build/"
          image={res.image ? require('assets/' + res.image) : false}
          title={res.text}>
          <VKIcon size={50} bgStyle={{fill: 'white'}} iconFillColor="#5B88BD" />
          <span>Поделиться</span>
        </VKShareButton>
        <TwitterShareButton
          url="https://808080.github.io/quiz-app-build/"
          title={res.text}>
          <TwitterIcon size={50} bgStyle={{fill: 'white'}} iconFillColor="#1DA1F2" />
          <span>Твитнуть</span>
        </TwitterShareButton>
      </div>

      <RestartBtn
        onSlideChange={props.onSlideChange}
        onCorrectAnswer={props.onCorrectAnswer}
      />
      {res.image ?
        <img className="quiz__img" src={require('assets/' + res.image)} alt="" />
        : false}
    </div>
  );
}

export default Result;