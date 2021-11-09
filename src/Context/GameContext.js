import React from 'react'

const GameContext = React.createContext({
  isGameOver: false,
  gameScore: 0,
  onClickChoiceButton: () => {},
  onClickPlayAgain: () => {},
  userDisplayImage: '',
  opponentDisplayImage: '',
  gameResultMessage: '',
})

export default GameContext
