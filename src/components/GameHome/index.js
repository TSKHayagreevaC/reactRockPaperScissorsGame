import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import Context from '../../Context/GameContext'

import ScoreComponent from '../GameScore'
import ButtonListItem from '../ButtonListItem'
import './index.css'

import {
  GameBgContainer,
  ButtonsList,
  ResultContainer,
  ResultImageContainer,
  ResultHeading,
  ResultImage,
  ResultOpponentImage,
  PlayAgainButton,
  ResultDisplayContainer,
  PopupButton,
  ModalContainer,
  ModalImage,
  CloseButton,
} from './styledComponent'

class GameHome extends Component {
  renderPopup = () => (
    <Popup
      modal
      trigger={<PopupButton>Rules</PopupButton>}
      className="popup-content"
    >
      {close => (
        <ModalContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine size={28} />
          </CloseButton>
          <ModalImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ModalContainer>
      )}
    </Popup>
  )

  playingView = () => {
    const {choicesList} = this.props
    return (
      <GameBgContainer>
        <ScoreComponent />
        <ButtonsList>
          {choicesList.map(eachItem => (
            <ButtonListItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ButtonsList>
        {this.renderPopup()}
      </GameBgContainer>
    )
  }

  gameResultsView = () => (
    <Context.Consumer>
      {value => {
        const {
          onClickPlayAgain,
          userDisplayImage,
          opponentDisplayImage,
          gameResultMessage,
        } = value
        return (
          <GameBgContainer>
            <ScoreComponent />
            <ResultContainer>
              <ResultImageContainer>
                <ResultHeading>YOU</ResultHeading>
                <ResultImage src={userDisplayImage} alt="your choice" />
              </ResultImageContainer>
              <ResultImageContainer>
                <ResultHeading>OPPONENT</ResultHeading>
                <ResultOpponentImage
                  src={opponentDisplayImage}
                  alt="opponent choice"
                />
              </ResultImageContainer>
              <ResultDisplayContainer>
                <ResultHeading>{gameResultMessage}</ResultHeading>
                <PlayAgainButton type="button" onClick={onClickPlayAgain}>
                  PLAY AGAIN
                </PlayAgainButton>
              </ResultDisplayContainer>
            </ResultContainer>
            {this.renderPopup()}
          </GameBgContainer>
        )
      }}
    </Context.Consumer>
  )

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isGameOver} = value
          if (isGameOver) {
            return this.gameResultsView()
          }
          return this.playingView()
        }}
      </Context.Consumer>
    )
  }
}

export default GameHome
