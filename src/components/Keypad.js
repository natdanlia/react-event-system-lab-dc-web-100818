// Code Keypad Component Here
import React from 'react'


class Keypad extends React.Component {
  enterPassWord = () => {
   console.log('Entering password...');
 }
  render () {
    return (
      < input onKeyUp={this.enterPassWord}type="password" />
    )
  }
}

export default Keypad;
