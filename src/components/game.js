import React from 'react'
import axios from 'axios'

class Game extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        user: '',
        mwords: [],
        words: [],
        original: '',
        translation: ''
      }
  }
  componentDidMount () {
    axios
      .get('http://localhost:3001/memorygame')
      .then(response => {

        const tdata=response.data
        console.log(tdata[0].user)
        this.setState({
          user: tdata[0].user,
          mwords:tdata[0].mwords,
          words: this.props.words
        })
      })
  }


  render() {

    return (
      <div>
        <form onSubmit={this.testWord}>
        <input value={this.state.translation} />
        </form>
        {console.log(this.state.mwords)}
        {console.log(this.state.words)}

      </div>
    )
  }

}
export default Game
