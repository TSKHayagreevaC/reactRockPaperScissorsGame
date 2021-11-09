import styled from 'styled-components'

export const ButtonsListItem = styled.li`
  list-style-type: none;
  width: 40%;
`

export const GameButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const GameButtonImage = styled.img`
  height: 100px;
  width: 100px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`
