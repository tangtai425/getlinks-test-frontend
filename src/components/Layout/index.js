import React, { Component } from 'react'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'

class Layout extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
          {this.props.children}
        <FooterContainer />
      </div>
    )
  }
}

export default Layout
