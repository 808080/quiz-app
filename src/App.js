import React from 'react';
import styled from 'styled-components';

import questions from './data/questions.json';
import Intro from './components/intro';
import Result from './components/result-screen';
import QuestionSlide from './components/question-slide';

import MobileBg from './assets/bitmap.png';

export const NUMBER_OF_QUESTIONS = questions.length;
export const ASSETS = './assets/';

class App extends React.Component {

  state = {
    currentQuestion: 0,
    correctAnswers: 0
  };

  onSlideChange = (currentQuestion) => {
    this.setState({
      currentQuestion
    });
  }

  onCorrectAnswer = (correctAnswers) => {
    this.setState({
      correctAnswers
    });
  }

  currentScreen = (q) => {
    switch (true) {
      case q === 0:
        return <Intro 
          onSlideChange={this.onSlideChange}
        />;
      case q > NUMBER_OF_QUESTIONS:
        return <Result
          onSlideChange={this.onSlideChange}
          onCorrectAnswer={this.onCorrectAnswer}
          correctAnswers={this.state.correctAnswers}
        />;
      default:
        return (
          <QuestionSlide
            currentQuestion={this.state.currentQuestion}
            onSlideChange={this.onSlideChange}
            onCorrectAnswer={this.onCorrectAnswer}
            correctAnswers={this.state.correctAnswers}
          />
        );
    }
  }

  render() {
    return (
      <QuizWrap>
        {this.currentScreen(this.state.currentQuestion)}
      </QuizWrap>
    );
  }
}

const QuizWrap = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  margin: auto;
  position: relative;
  max-width: 1060px;
  min-height: 536px;
  padding: 25px 53px;
  box-sizing: border-box;
  background: #FEEBEF;
  box-shadow: 0px 30px 40px rgba(133, 73, 86, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.01);
  overflow: hidden;

  @media (max-width: 639px) {
    padding: 25px 38px;
    background: url(${MobileBg}), #FEEBEF;
  }

  @media (max-width: 424px) {
    padding: 25px;
  }
`;

export default App;
