import React from 'react';
import styled from 'styled-components';

import RestartBtn from './buttons/restartBtn';

import Again from '../assets/refresh-arrow.svg';

import results from '../data/results.json';
import { NUMBER_OF_QUESTIONS } from '../App';

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
    <ResultStyled theme={res}>
      <p className="quiz__total">{props.correctAnswers} из {NUMBER_OF_QUESTIONS} правильных ответов</p>
      <h3 className="quiz__res-text">{res.text}</h3>

      <RestartBtn
        onSlideChange={props.onSlideChange}
        onCorrectAnswer={props.onCorrectAnswer}
      />
    </ResultStyled>
  );
}

const ResultStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;

  &::before {
    content: '';
    background: url(${props => props.theme.image ? require('../assets/' + props.theme.image) : false}) no-repeat center right;
    background-size: 100%;
    height: 100%;
    width: 70%;
    max-width: 530px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .quiz {
    &__total {
      margin: 0;
    }

    &__res-text {
      margin: 15px 0 30px;
      font-weight: 900;
      font-size: 36px;
      max-width: 390px;
      margin: 60px 0 40px;
      position: relative;
      z-index: 2;
    }

    &__restart {
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
      position: absolute;
      bottom: 25px;
      z-index: 2;

      &::after {
        content: url(${Again});
        margin-left: 10px;
        vertical-align: middle;
        height: 20px;
        display: inline-block;
      }

      &:hover {
        &::after {
          transform: rotate(360deg);
          transition: .4s;
        }
      }
    }
  }

  @media (max-width: 639px) {
    .quiz {
      &__res-text {
        font-size: 28px;
      }
    }
  }

  @media (max-width: 424px) {
    &::before {
      height: 70%;
    }
  }
`;

export default Result;