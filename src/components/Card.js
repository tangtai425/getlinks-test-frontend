import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ imageURL, title, text}) => (
  <div className="card">
    <img className="card-img-top" src={imageURL} alt={title} style={styles.image}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  </div>
)

const styles = {
  image: {
    width: '100%',
    borderRadius: '5px',
  },
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
}

export default Card
