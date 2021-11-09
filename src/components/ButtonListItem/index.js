import {Component} from 'react'

import Context from '../../Context/GameContext'

import {ButtonsListItem, GameButton, GameButtonImage} from './styledComponent'

class ButtonListItem extends Component {
  render() {
    const {eachItem} = this.props
    return (
      <Context.Consumer>
        {value => {
          const {onClickChoiceButton} = value
          console.log(`${eachItem.id.toLowerCase()}Button`)
          return (
            <ButtonsListItem>
              <GameButton
                onClick={() => onClickChoiceButton(eachItem.id)}
                type="button"
                data-testid={`${eachItem.id.toLowerCase()}Button`}
              >
                <GameButtonImage
                  id={eachItem.id}
                  src={eachItem.image}
                  alt={`${eachItem.id}`}
                />
              </GameButton>
            </ButtonsListItem>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default ButtonListItem
