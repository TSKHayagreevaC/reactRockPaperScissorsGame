import {Component} from 'react'

import Context from './Context/GameContext'
import GameHome from './components/GameHome'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isGameOver: false,
    gameScore: 0,
    gameResultMessage: '',
    userDisplayImage: '',
    opponentDisplayImage: '',
  }

  onClickChoiceButton = userSelectedId => {
    const randomNumber = Math.random() * 3
    const randomId = Math.floor(randomNumber)
    let opponentId
    if (randomId === 0) {
      opponentId = 'SCISSORS'
    } else if (randomId === 1) {
      opponentId = 'ROCK'
    } else {
      opponentId = 'PAPER'
    }

    const userSelectedImage = choicesList.filter(
      eachItem => eachItem.id === userSelectedId,
    )[0].image

    const opponentSelectedImage = choicesList.filter(
      eachItem => eachItem.id === opponentId,
    )[0].image

    let resultMessage
    switch (true) {
      case userSelectedId === opponentId:
        resultMessage = 'IT IS DRAW'
        break
      case userSelectedId === 'PAPER' && opponentId === 'ROCK':
        resultMessage = 'YOU WON'
        break
      case userSelectedId === 'SCISSORS' && opponentId === 'ROCK':
        resultMessage = 'YOU LOSE'
        break
      case userSelectedId === 'ROCK' && opponentId === 'PAPER':
        resultMessage = 'YOU LOSE'
        break
      case userSelectedId === 'SCISSORS' && opponentId === 'PAPER':
        resultMessage = 'YOU WON'
        break
      case userSelectedId === 'ROCK' && opponentId === 'SCISSORS':
        resultMessage = 'YOU WON'
        break
      case userSelectedId === 'PAPER' && opponentId === 'SCISSORS':
        resultMessage = 'YOU LOSE'
        break
      default:
        resultMessage = ''
        break
    }

    if (resultMessage === 'YOU WON') {
      this.setState(prevState => ({gameScore: prevState.gameScore + 1}))
    } else if (resultMessage === 'YOU LOSE') {
      this.setState(prevState => ({gameScore: prevState.gameScore - 1}))
    } else if (resultMessage === 'IT IS DRAW') {
      this.setState(prevState => ({gameScore: prevState.gameScore + 0}))
    }

    this.setState({
      gameResultMessage: resultMessage,
      userDisplayImage: userSelectedImage,
      opponentDisplayImage: opponentSelectedImage,
      isGameOver: true,
    })
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      gameScore: prevState.gameScore,
      isGameOver: false,
    }))
  }

  render() {
    const {
      gameScore,
      gameResultMessage,
      isGameOver,
      userDisplayImage,
      opponentDisplayImage,
      resultMessage,
    } = this.state
    return (
      <Context.Provider
        value={{
          gameResultMessage,
          onClickChoiceButton: this.onClickChoiceButton,
          onClickPlayAgain: this.onClickPlayAgain,
          gameScore,
          isGameOver,
          userDisplayImage,
          opponentDisplayImage,
          resultMessage,
        }}
      >
        <GameHome choicesList={choicesList} />
      </Context.Provider>
    )
  }
}

export default App
