import {
  ScoreContainer,
  ScoreHeading,
  ScoreCountContainer,
  ScoreDisplayText,
  ScoreDisplayCount,
} from './styledComponent'

const ScoreComponent = props => {
  const {score} = props
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
        <ScoreDisplayCount>{score}</ScoreDisplayCount>
      </ScoreCountContainer>
    </ScoreContainer>
  )
}

export default ScoreComponent
