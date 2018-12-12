// Code EyesOnMe Component Here
import React from 'react'
import PropTypes from 'prop-types'

class EyesOnMe extends React.Component {
  focuss = () => {
    console.log("Good!")
  }

  blurr = () => {
    console.log("Hey! Eyes on me!")
  }

  render () {
    return(
      <button onFocus={this.focuss} onBlur={this.blurr} type="button" >I am a button</button>
    )
  }
}

export default EyesOnMe;
