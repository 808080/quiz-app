import React from 'react';

import questions from 'data/questions.json';
import Intro from 'components/intro';
import Result from 'components/result-screen';
import QuestionSlide from 'components/question-slide';

export const NUMBER_OF_QUESTIONS = questions.length;

class App extends React.Component {

  state = {
    currentQuestion: 0,
    correctAnswers: 0
  };

  resultImg;

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
      <div className="quiz__wrap">
        {this.currentScreen(this.state.currentQuestion)}
      </div>
    );
  }
}

export default App;
