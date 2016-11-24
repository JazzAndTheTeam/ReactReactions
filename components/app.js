import React from 'react'
import { render } from 'react-dom'
const TweetsContainer = require('./tweetsContainer')

const App = (props) =>
  <div className='App'>
    <TweetsContainer
    mainClass='pos'
    childClass='positive'
    tweets={props.state.posTweets}
    dispatch={props.dispatch}
    />

    <TweetsContainer
    mainClass='neg'
    childClass='negative'
    tweets={props.state.posTweets}
    dispatch={props.dispatch}
    />
  </div>

module.exports = App
