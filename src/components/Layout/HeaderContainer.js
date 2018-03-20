import React, { Component } from 'react'

class HeaderContainer extends Component {
  render() {
    return (
      <div className="text-center" style={styles.headerContainer}>
        <img src="http://via.placeholder.com/150x150"
          className="rounded mx-auto d-block"
          alt="..."
          style={styles.image}
        />
        <ul className="list-inline">
          <li style={styles.list}>
            <h4>One</h4>
          </li>
          <li style={styles.list}>
            <h4>Two</h4>
          </li>
          <li style={styles.list}>
            <h4>Three</h4>
          </li>
          <li style={styles.list}>
            <h4>Four</h4>
          </li>
        </ul>
      </div>
    )
  }
}

const styles = {
  headerContainer: {
    margin: '30px 0',
  },
  image: {
    margin: '30px 0',
    borderRadius: '50%',
  },
  list: {
    padding: '0 20px',
  },
}

export default HeaderContainer
