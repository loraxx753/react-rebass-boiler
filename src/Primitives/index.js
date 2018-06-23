import React from 'react'
import styled from 'styled-components'
import { Text as TextBase, Link as LinkBase } from 'rebass'

class Primitive extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <React.Fragment>
        <p>In Primitive</p>
      </React.Fragment>
    )
  }
}
export default Primitive

const Text = TextBase

const Link = LinkBase

export { Text, Link }
