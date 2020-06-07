import React from 'react';
import parser from 'react-html-parser';
import styled from 'styled-components';

import NextSlide from './buttons/nextSlide';
import Variant from './buttons/variant';
import BtnStyled from './buttons/btnStyled';

import Continue from '../assets/next-arrow.svg';

import questions from '../data/questions.json';
import { NUMBER_OF_QUESTIONS } from '../App';

class QuestionSlide extends React.Component {

  state = {
    answered: false
  }

  selectedAnswer;
  correct;
  note;

  onAnswered = (answered) => {
    this.setState({
      answered
    });
  }

  getAnswer = (answer) => {
    this.selectedAnswer = answer;
  }

  isCorrect = (correct) => {
    this.correct = correct;
    if (correct) {
      this.props.onCorrectAnswer(this.props.correctAnswers + 1);
    }
  }

  getNote = (note) => {
    this.note = note;
  }

  render() {
    return (
      <SlideStyled>
        <p className="quiz__progress">{this.props.currentQuestion}/{NUMBER_OF_QUESTIONS}</p>
        <p className="quiz__question">{questions[this.props.currentQuestion - 1].question}</p>

        {this.state.answered ?
          <>
            <BtnStyled className={`quiz__btn-answered ${this.correct ? 'quiz__right' : 'quiz__wrong'}`}>{this.selectedAnswer}</BtnStyled>
            <p className="quiz__note">{parser(this.note)}</p>
            <NextSlide
              currentQuestion={this.props.currentQuestion}
              onSlideChange={this.props.onSlideChange}
              onAnswered={this.onAnswered}
            />
          </> :
          questions[this.props.currentQuestion - 1].variants.sort(() => Math.random() - 0.5).map((item, index) => (
            <Variant
              key={index}
              answer={item.answer}
              correct={item.correct}
              note={item.note}
              onAnswered={this.onAnswered}
              getAnswer={this.getAnswer}
              isCorrect={this.isCorrect}
              getNote={this.getNote}
            />
          ))}
      </SlideStyled>
    );
  }
}

const SlideStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;

  .quiz {
    &__progress {
      margin: 0;
    }

    &__question {
      font-weight: 500;
      font-size: 26px;
      margin: 15px 0 30px
    }

    &__note {
      margin: 30px 0;

      a {
        color: #00A0F6;
      }
    }

    &__btn-answered {
      font-weight: bold;
      border-width: 2px;
      cursor: auto;
    }

    &__right {
      border-color: #43A457;
      color: #43A457;
    }

    &__wrong {
      border-color: #E25A76;
      color: #E25A76;
    }

    &__next-question {
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
      position: absolute;
      bottom: 25px;

      &::after {
        content: url(${Continue});
        margin-left: 14px;
        vertical-align: text-top;
        height: 20px;
        display: inline-block;
        transition: .3s;
      }

      &:hover {
        &::after {
          margin-left: 20px;
        }
      }
    }
  }
`;

export default QuestionSlide;