import React, { Component } from 'react'
import Card from './Card'
import { mockCardData } from '../mock'

class BodyContainer extends Component {
  renderCards = () => mockCardData.map(card => <div className="col-sm-3">
    <Card
      title={card.title}
      text={card.text}
      imageURL={card.image}
    />
  </div>)

  render() {
    return (
      <div className="container">
        <div className="row" style={ styles.bodyContainer }>
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

const styles = {
  bodyContainer: {
    marginTop: '70px',
    marginBottom: '70px',
  },
}

export default BodyContainer
