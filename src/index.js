import React from 'react';
import ReactDOM from 'react-dom';

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

const Word = ({word}) => {
  return (
    <li>{word.finnish} {word.russian}</li>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: props.words
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.words.map(word => <Word key={word.id} word={word} />)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App words={words} />, document.getElementById('root'));
