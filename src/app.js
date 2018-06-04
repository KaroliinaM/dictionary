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
  filterWords =()=> {
    switch(this.state.translateFrom) {
      case 'finnish' :
        return this.state.words.filter(word=>word.finnish.includes(this.state.filter)===true)
      case 'russian' :
        return this.state.words.filter(word=>word.russian.includes(this.state.filter)===true)
      case 'english' :
        return this.state.words.filter(word=>word.english.includes(this.state.filter)===true)
      default :
        return this.state.words
    }
  }
  switchLanguage = () => {
    console.log('switch')
    const tmp1=this.state.translateTo
    const tmp2=this.state.translateFrom
    this.setState({translateTo: tmp2})
    this.setState({translateFrom: tmp1})
  }


  render() {
    const shownWords= this.filterWords()
    return (
      <div>
        <div>
          <p>finnish
          <button onClick={this.switchLanguage}> language change </button>
           russian</p>
        </div>
        <input value={this.state.filter} onChange={this.handleChange} />
        <table>
          <tbody>
            {shownWords.map(word => <tr key={word.id}><td><Word word={word} language={this.state.translateFrom} /></td><td><Word word={word} language={this.state.translateTo} /></td></tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
