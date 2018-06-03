import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

const words= [
  {
    id: 1,
    finnish: 'kissa',
    english: 'a cat',
    russian: 'кошка',
    description: 'a feline'
  },
  {
    id: 2,
    finnish: 'koira',
    english: 'a dog',
    russian: 'собака',
    description: 'a hound'
  }
]



ReactDOM.render(<App words={words} />, document.getElementById('root'));
