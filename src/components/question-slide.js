import React from 'react';
import parser from 'react-html-parser';

import NextSlide from 'components/buttons/nextSlide';
import Variant from 'components/buttons/variant';

import questions from 'data/questions.json';
import { NUMBER_OF_QUESTIONS } from 'App';

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
      <div className="quiz__slide">
        <p className="quiz__progress">{this.props.currentQuestion}/{NUMBER_OF_QUESTIONS}</p>
        <p className="quiz__question">{questions[this.props.currentQuestion - 1].question}</p>

        {this.state.answered ?
          <>
            <button className={`quiz__btn quiz__btn-answered ${this.correct ? 'quiz__right' : 'quiz__wrong'}`}>{this.selectedAnswer}</button>
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
      </div>
    );
  }
}

export default QuestionSlide;