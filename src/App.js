import React, { Component } from 'react'
import Layout from './components/Layout'
import BodyContainer from './components/BodyContainer'
import Banner from './components/Banner'

class App extends Component {
  render() {
    return (
      <Layout>
        <Banner />
        <BodyContainer />
      </Layout>
    );
  }
}

export default App
