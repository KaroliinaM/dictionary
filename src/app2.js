import React from 'react';
import ReactDOM from 'react-dom';
import Word from './components/word'
import Testi from './components/testi'
import Game from './components/game'
import axios from 'axios'

const word_list='http://localhost:3001/words'

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
      .get(word_list)
      .then(response => {
        console.log(response.data)
        console.log(word_list)
        this.setState({words:response.data})
      })
      console.log('mount')
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
