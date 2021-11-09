import Context from '../../Context/GameContext'

import {
  ScoreContainer,
  ScoreHeading,
  ScoreCountContainer,
  ScoreDisplayText,
  ScoreDisplayCount,
} from './styledComponent'

const ScoreComponent = () => (
  <Context.Consumer>
    {value => {
      const {gameScore} = value
      return (
        <ScoreContainer>
          <ScoreHeading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </ScoreHeading>
          <ScoreCountContainer>
            <ScoreDisplayText>Score</ScoreDisplayText>
            <ScoreDisplayCount>{gameScore}</ScoreDisplayCount>
          </ScoreCountContainer>
        </ScoreContainer>
      )
    }}
  </Context.Consumer>
)

export default ScoreComponent
