/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ScoreContainer = styled.div`
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`

export const ScoreHeading = styled.h1`
  margin: 5px 0px 5px 0px;
  font-family: 'Bree Serif';
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const ScoreCountContainer = styled.div`
  height: 80px;
  width: 80px;
  background-color: #ffffff;
  margin: 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 130px;
    width: 130px;
  }
`

export const ScoreDisplayText = styled.p`
  margin: 5px 0px 5px 0px;
  font-size: 14px;
  font-family: 'Bree Serif';
  color: #223a5f;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const ScoreDisplayCount = styled.p`
  margin: 5px 0px 5px 0px;
  font-family: 'Roboto';
  font-size: 22px;
  color: #223a5f;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
