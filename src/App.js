import React from 'react'
import GlobalStyle from './GlobalStyle/globalStyle';
import { Root } from "./Routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Root />
      <div>App</div>
    </>
  )
}

export default App