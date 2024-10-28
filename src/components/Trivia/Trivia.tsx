import React, { useState } from 'react';
import Input from '../Input';
import RadioList from '../RadioList';

import './styles.scss';

interface RadioButton {
  label: string
  value: string | number
}

interface Question {
  type: 'multiple' | 'string' | 'number'
  question: string
  options?: RadioButton[]
  answer: string | number
}

interface Props {
  questions: Question[]
}

const Radio: React.FC<Props> = (props) => {
  const {
    questions = [],
  } = props;

  const [answers, setAnswers] = useState(
    questions.map((question: Question) => question.answer)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const currentQuestions = [questions[currentQuestion]];
  if (currentQuestion > 0) {
    currentQuestions.unshift(questions[currentQuestion - 1])
  }

  const handleQuestionChange = (value: string | number, index: number) => {
    answers[index] = value;
    setAnswers([...answers]);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
      <div className='trivia'>
        <div className='test'></div>
        <div className='trivia__carousel'>
          {
            currentQuestions.map((question: Question, index: number) => (
              <div
                key={`trivia__carousel__slide-${currentQuestion + index}`}
                className={index === 0
                  ? 'trivia__carousel__slide trivia__carousel__slide--prev'
                  : 'trivia__carousel__slide trivia__carousel__slide--current'
                }
              >
                {
                  question.type === 'multiple' &&
                  <div>
                    <div>{question.question}</div>
                    <RadioList
                      options={question.options!}
                      value={answers[index]}
                      orientation='vertical'
                      onChange={(value: string | number) => {handleQuestionChange(value, index)}}
                    />
                  </div>
                }
                {
                  question.type === 'string' &&
                  <div>
                    <Input
                      type="text"
                      title={question.question}
                      value={answers[index]}
                      onChange={(value: string | number) => {handleQuestionChange(value, index)}}
                    />
                  </div>
                }
                {
                  question.type === 'number' &&
                  <div>
                    <Input
                      type="number"
                      title={question.question}
                      value={answers[index]}
                      onChange={(value: string | number) => {handleQuestionChange(value, index)}}
                    />
                  </div>
                }
              </div>
            ))
          }
        </div>
        <br/>
        <button
          onClick={nextQuestion}
          className='trivia__button'
        >
          Siguiente
        </button>
      </div>
  );
}

export default Radio;
