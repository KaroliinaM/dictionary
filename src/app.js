import React from 'react';
import ReactDOM from 'react-dom';
import Word from './components/word'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: props.words,
      filter: '',
      translateFrom: 'finnish',
      translateTo: 'russian'
    }
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({filter:event.target.value})
  }
  render() {
    return (
      <div>
        <input value={this.state.filter} onChange={this.handleChange} />
        <table>
          <tbody>
            {this.state.words.map(word => <tr key={word.id}><td><Word word={word} language={this.state.translateFrom} /></td><td><Word word={word} language={this.state.translateTo} /></td></tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
