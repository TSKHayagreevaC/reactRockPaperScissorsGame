import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ScoreComponent from '../GameScore'
import './index.css'

import {
  GameBgContainer,
  ButtonsList,
  ResultContainer,
  ButtonsListItem,
  GameButton,
  GameButtonImage,
  ResultImageContainer,
  ResultHeading,
  ResultImage,
  PlayAgainButton,
  ResultDisplayContainer,
  PopupButton,
  ModalContainer,
  ModalImage,
  CloseButton,
} from './styledComponent'

class GameHome extends Component {
  state = {
    isGameOver: false,
    score: 0,
    resultDisplayMessage: '',
    userDisplayImage: '',
    opponentDisplayImage: '',
  }

  randomNumberGenerator = () => {
    const randomNumber = (Math.random() * 10) / 4
    const randomId = Math.floor(randomNumber)
    let opponentId
    if (randomId === 0) {
      opponentId = 'SCISSORS'
    } else if (randomId === 1) {
      opponentId = 'ROCK'
    } else {
      opponentId = 'PAPER'
    }
    return opponentId
  }

  onClickButton = event => {
    const userSelectedId = event.target.id
    const opponentSelectedId = this.randomNumberGenerator()
    const {choicesList} = this.props

    const userSelectedImage = choicesList.filter(
      eachItem => eachItem.id === userSelectedId,
    )[0].image

    const opponentSelectedImage = choicesList.filter(
      eachItem => eachItem.id === opponentSelectedId,
    )[0].image

    let resultMessage
    switch (true) {
      case userSelectedId === opponentSelectedId:
        resultMessage = 'IT IS DRAW'
        break
      case userSelectedId === 'PAPER' && opponentSelectedId === 'ROCK':
        resultMessage = 'YOU WON'
        break
      case userSelectedId === 'SCISSORS' && opponentSelectedId === 'ROCK':
        resultMessage = 'YOU LOSE'
        break
      case userSelectedId === 'ROCK' && opponentSelectedId === 'PAPER':
        resultMessage = 'YOU LOSE'
        break
      case userSelectedId === 'SCISSORS' && opponentSelectedId === 'PAPER':
        resultMessage = 'YOU WON'
        break
      case userSelectedId === 'ROCK' && opponentSelectedId === 'SCISSORS':
        resultMessage = 'YOU WON'
        break
      case userSelectedId === 'PAPER' && opponentSelectedId === 'SCISSORS':
        resultMessage = 'YOU LOSE'
        break
      default:
        resultMessage = ''
        break
    }

    let gameScore
    if (resultMessage === 'YOU WON') {
      gameScore = 1
    } else if (resultMessage === 'YOU LOSE') {
      gameScore = -1
    } else if (resultMessage === 'IT IS DRAW') {
      gameScore = 0
    }

    this.setState(prevItem => ({
      score: prevItem.score + gameScore,
      resultDisplayMessage: resultMessage,
      userDisplayImage: userSelectedImage,
      opponentDisplayImage: opponentSelectedImage,
      isGameOver: true,
    }))
  }

  renderInitialButtonsContainer = () => {
    const {choicesList} = this.props

    return (
      <ButtonsList>
        {choicesList.map(eachItem => (
          <ButtonsListItem key={eachItem.id}>
            <GameButton
              onClick={this.onClickButton}
              data-testid={`${eachItem.id.toLowerCase()}Button`}
            >
              <GameButtonImage
                id={eachItem.id}
                src={eachItem.image}
                alt={`${eachItem.id}`}
              />
            </GameButton>
          </ButtonsListItem>
        ))}
      </ButtonsList>
    )
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameOver: false,
      score: 0,
      resultDisplayMessage: '',
      userDisplayImage: '',
      opponentDisplayImage: '',
    })
  }

  renderResultContainer = () => {
    const {
      userDisplayImage,
      opponentDisplayImage,
      resultDisplayMessage,
    } = this.state

    return (
      <ResultContainer>
        <ResultImageContainer>
          <ResultHeading>YOU</ResultHeading>
          <ResultImage src={userDisplayImage} alt="your choice" />
        </ResultImageContainer>
        <ResultImageContainer>
          <ResultHeading>OPPONENT</ResultHeading>
          <ResultImage src={opponentDisplayImage} alt="opponent choice" />
        </ResultImageContainer>
        <ResultDisplayContainer>
          <ResultHeading>{resultDisplayMessage}</ResultHeading>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultDisplayContainer>
      </ResultContainer>
    )
  }

  renderGame = () => {
    const {isGameOver} = this.state
    if (isGameOver) {
      return this.renderResultContainer()
    }
    return this.renderInitialButtonsContainer()
  }

  renderPopup = () => (
    <Popup
      modal
      trigger={<PopupButton>Rules</PopupButton>}
      className="popup-container"
    >
      {close => (
        <ModalContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size={18} />
          </CloseButton>
          <ModalImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ModalContainer>
      )}
    </Popup>
  )

  render() {
    const {score} = this.state
    return (
      <GameBgContainer>
        <ScoreComponent score={score} />
        {this.renderGame()}
        {this.renderPopup()}
      </GameBgContainer>
    )
  }
}

export default GameHome
