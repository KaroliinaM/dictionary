import React from 'react';
import ReactDOM from 'react-dom';
import Word from './components/word'
import Game from './components/game'
import axios from 'axios'


class App extends React.Component {
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
  addWord = (event) => {
    event.preventDefault()
    const wordObject = {
      finnish: this.state.finnish,
      english: this.state.english,
      russian: this.state.russian,
      description: this.state.description,
      id: this.state.words.length +1
    }
    axios
      .post('http://localhost:3001/words', wordObject)
      .then(response => {
        this.setState({
          words:this.state.words.concat(wordObject),
          finnish: '',
          russian: '',
          english: '',
          description: ''
        })
      })
  }

  handleFieldChange = (event) => {
    console.log('hei')
    this.setState({[event.target.name]:event.target.value})
  }
  gameSwitch=(event)=> {
    event.preventDefault()
    console.log('switched')
    const val=this.state.game===0 ? 1 : 0
    this.setState({game: val})
  }



  render() {
    const shownWords= this.filterWords()
    const buttonText = this.state.game===0 ? 'show game' : 'show dictionary'
    return (
      <div>
        <div>
        <p><button onClick={this.gameSwitch}>{buttonText}</button></p>
        </div>
          <div>
          <form onSubmit={this.addWord}>
            russian <input value={this.state.russian} onChange={this.handleFieldChange} name="russian" /><br />
            finnish <input value={this.state.finnish} onChange={this.handleFieldChange} name="finnish" /><br />
            english <input value={this.state.english} onChange={this.handleFieldChange} name="english" /><br />
            description <input value={this.state.description} onChange={this.handleFieldChange} name="description" /><br />
            <button type="submit">insert word</button>
          </form>
          <p>finnish
          <button onClick={this.switchLanguage}> language change </button>
           russian</p>
        <input value={this.state.filter} onChange={this.handleChange} />
        <table>
          <tbody>
            {shownWords.map(word => <tr key={word.id}><td><Word word={word} language={this.state.translateFrom} /></td><td><Word word={word} language={this.state.translateTo} /></td></tr>)}
          </tbody>
        </table>
        <br />
        </div>


        <div>
        <Game words={shownWords} />
        </div>
      </div>
    )
  }
}

export default App
