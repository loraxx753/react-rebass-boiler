import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import { Provider, Drawer, Heading } from 'rebass'
import Grid from 'styled-components-grid'
import { Text, Link } from './Primitives'
import { withAuthenticator } from 'aws-amplify-react';


class App extends Component {
  render () {
    return (
      <Provider>
        <div>
            <Text>Hello</Text>
        </div>
      </Provider>
    )
  }
}

export default App
