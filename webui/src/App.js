import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme.js';
import IndexScreen from './Screens/IndexScreen.js';

const App = props => (
  <ThemeProvider theme = { theme }>
    <IndexScreen/>
  </ThemeProvider>
)

export default App;
