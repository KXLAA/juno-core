import styled from 'styled-components'
import * as themeConstants from '../../constants/themeConstants'

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

export const Inner = styled.div`
  text-align: center;
`

export const PageHeaderText = styled.h1`
  margin: 2rem 0 0;
  font-weight: 200;
  user-select: none;
  font-size: 2.441rem;
  font-family: 'Raleway Variable', serif;
  line-height: 1.3;
  color: ${themeConstants.colorBlack} !important;
`
