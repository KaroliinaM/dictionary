import React from 'react';
import ReactDOM from 'react-dom';
import Word from './components/word'
import Testi from './components/testi'
import Game from './components/game'
import axios from 'axios'


class App2 extends React.Component {
  constructor() {
    super()
    this.state = {
      words: [],
      filter: '',
      translateFrom: 'finnish',
      translateTo: 'russian',
      finnish: '',
      english: '',
      russian: '',
      description: '',
      game: 0
    }
  }
  componentDidMount () {
    axios
      .get('http://localhost:3001/words')
      .then(response => {
        this.setState({words:response.data})
      })
  }



  render() {
    return (
      <div>
        <div>

        <table>
          <tbody>
            {this.state.words.map(word => <tr key={word.id}><td><Word word={word} language={this.state.translateFrom} /></td><td><Word word={word} language={this.state.translateTo} /></td></tr>)}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}

export default App2
