import React, { useEffect, useState } from 'react'
import GlobalStyle from './GlobalStyle/globalStyle';
import { Root } from "./Routes";
import { CartProvider } from './Components/cartContext';

const App = () => {



  return (
    <>
    <CartProvider>

      <GlobalStyle />
      <Root />
    </CartProvider>
    </>
  )
}

export default App