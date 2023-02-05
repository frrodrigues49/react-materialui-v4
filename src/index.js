import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import colorTheme from '@material-ui/core/colors/index'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3c5cd3'
    }
  }
})

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)