import React from 'react'
import PropTypes from 'prop-types'

const Banner = () => (
  <div style={ styles.banner }>
    <div className="container">
      <div className="row">
        <div className="col-sm-offset-3 col-sm-6">
          <h2 className="text-center">Banner</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
)

const styles = {
  banner: {
    padding: '100px 0',
    backgroundColor: '#EEEEEE',
  },
}

export default Banner
