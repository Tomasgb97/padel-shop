import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import Header from './components/Header'
import { ChakraProvider } from "@chakra-ui/react"



ReactDOM.render(
  
  <React.StrictMode>
    <ChakraProvider>
      <Header></Header>
      <Routes></Routes>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

