import React, { Component } from 'react'

class FooterContainer extends Component {
  render() {
    return (
      <div style={ styles.footerContainer }>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h4>Footer 1</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="col-sm-3">
              <h4>Footer 2</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="col-sm-3">
              <h4>Footer 3</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="col-sm-3">
              <h4>Footer 4</h4>
              <div className="row">
                <div className="col-sm-4">
                  <img src="http://via.placeholder.com/150x150"
                    className="rounded mx-auto d-block"
                    alt="..."
                    style={styles.image}
                  />
                </div>
                <div className="col-sm-4">
                  <img src="http://via.placeholder.com/150x150"
                    className="rounded mx-auto d-block"
                    alt="..."
                    style={styles.image}
                  />
                </div>
                <div className="col-sm-4">
                  <img src="http://via.placeholder.com/150x150"
                    className="rounded mx-auto d-block"
                    alt="..."
                    style={styles.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  footerContainer: {
    padding: '50px 0',
    backgroundColor: '#EEEEEE',
  },
  image: {
    width: '100%',
  },
}

export default FooterContainer
