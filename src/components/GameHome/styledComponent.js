import styled from 'styled-components'

export const GameBgContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const ButtonsList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
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

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
`

export const ResultHeading = styled.p`
  margin: 5px 0px 5px 0px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const ResultImage = styled.img`
  width: 60%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const ResultDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const PlayAgainButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 8px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const PopupButton = styled.button`
  height: 40px;
  width: 120px;
  border: none;
  border-radius: 8px;
  font-family: 'Bree Serif';
  color: #223a5f;
  align-self: flex-end;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  width: 80%;
  height: 260px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 80%;
    height: 400px;
  }
`

export const ModalImage = styled.img`
  width: 100%;
  height: 180px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 350px;
  }
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #223a5f;
  cursor: pointer;
`
