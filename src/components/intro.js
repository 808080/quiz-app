import React from 'react';
import styled from 'styled-components';

import BtnStyled from './buttons/btnStyled';

import Head from '../assets/intro-head.png';
import Back from '../assets/intro-bg.png';

function Intro(props) {

  return (
    <IntroStyled>
      <span className="quiz__test">Тест</span>
      <h2 className="quiz__heading">Как хорошо вы разбираетесь в новостях бизнеса</h2>
      <p>По следам публикаций на vc.ru.</p>

      <BtnStyled className="quiz__btn-begin" onClick={() => props.onSlideChange(1)}>Начать</BtnStyled>
    </IntroStyled>
  );
}

const IntroStyled = styled.div`
  max-width: 510px;
  margin-top: 33px;

  .quiz {
    &__btn-begin {
      font-weight: bold;
      font-size: 20px;
      position: absolute;
      bottom: 40px;
      z-index: 2;
    }

    &__test {
      font-size: 18px;
      color: #fff;
      padding: 5px 14px;
      background-color: #E25A76;
      float: right;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 12px 15px 0 0;
        border-color: #BA4961 transparent transparent transparent;
        top: 100%;
        right: 0;
      }
    }

    &__heading {
      clear: both;
      font-weight: 900;
      font-size: 34px;
      padding-right: 10px;
      margin: 0;
    }
  }

  &::after {
    content: url(${Head});
    position: absolute;
    top: 49px;
    left: 60%;
  }

  &::before {
    content: '';
    background: url(${Back}) no-repeat bottom right;
    background-size: 100%;
    height: 100%;
    width: 95%;
    max-width: 680px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 1023px) {
    &::after {
      top: -19px;
      left: 30%;
    }
  }

  @media (max-width: 639px) {
    .quiz {
      &__heading {
        font-size: 28px;
      }
    }
  }

`;

export default Intro;
