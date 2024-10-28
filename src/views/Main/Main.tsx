import React from 'react';
import Countdown from '../../components/Countdown';
import Trivia from '../../components/Trivia';

import './styles.scss';

const Main = () => {    
    return (
        <div className="main">
            <Trivia
              questions={[
                {
                  type: 'multiple',
                  question: '¡Donde se conocío la pareja?',
                  options: [
                    {
                      label: 'En un teibol',
                      value: 'teibol'
                    },
                    {
                      label: 'En la escuela',
                      value: 'escuela'
                    },
                    {
                      label: 'En la calle',
                      value: 'calle'
                    }
                  ],
                  answer: 'escuela'
                },
                {
                  type: 'string',
                  question: 'asdfad',
                  answer: 'asdf'
                },
                {
                  type: 'number',
                  question: 'Cuantos años tienen de conocerse',
                  answer: 3
                }
              ]}
            />

            <Countdown />
        </div>
    );
}

export default Main;
