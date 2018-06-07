import React from 'react'
import axios from 'axios'

class Game extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        original: '',
        translation: '',
        points: 0,
        total: 0,
        wordList:[],
        listOrder:[],
        next: 0,
        check:''
      }
  }
  startTranslation=()=> {
      const wlist=this.props.words
      let orderer=[]
      wlist.map(w =>{
        w.guess=0
        orderer.push({order: w.id-1, id: w.id})
      })

      this.setState({wordList: wlist, listOrder: orderer, original: wlist[0].finnish})
  }
  sortOrder=()=> {
    const wlist=this.state.wordList
    wlist.sort(function (a, b) {
      return a.guess - b.guess;
    })
    let order=0
    let orderer=[]
    wlist.map(word => {
      orderer.push({order: order, id: word.id})
      order=order+1
    })
    console.log('lista')
    console.log(orderer)
    this.setState({listOrder: orderer})
  }
  findWord=(i)=> {
    const index=this.state.listOrder.find(o=>o.order===i)
    const word=this.state.wordList.find(w => w.id===index.id)
    return word
  }
  checkTranslation=(event)=>{
    event.preventDefault()
    const word=this.findWord(this.state.next)
    if(word.russian===this.state.translation) {
      console.log('success')
      let guessed={...word}
      guessed.guess=guessed.guess+1
      this.setState({
        wordList: this.state.wordList.map(w => w.id!== word.id? w : guessed ),
        points: this.state.points +1 ,
        check: ''
      })
      console.log(guessed)
    } else {
      console.log('fail')
      this.setState({check: word.finnish + " " + word.russian})
    }
    let n=0
    if(this.state.next<this.state.wordList.length/2) {
      n=this.state.next+1
    } else {
      this.sortOrder()
    }
    const newWord=this.findWord(n)
    this.setState({
      original: newWord.finnish,
      translation: "",
      next: n,
      total: this.state.total+1
    })
  }
  changeField=(event)=>{
    this.setState({translation: event.target.value})
  }




  render() {
    //console.log(this.state.wordList)




    return (

      <div>
      <button onClick={this.startTranslation}> aloita</button>

        <form onSubmit={this.checkTranslation}>
        <input value={this.state.original} />
        <input value={this.state.translation} onChange={this.changeField} />
        <button type='submit'>translate</button>
        </form>
        <p>{this.state.points/this.state.total}  |  {this.state.total} | {this.state.check} </p>

      </div>
    )
  }

}
export default Game
