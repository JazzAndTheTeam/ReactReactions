import React from 'react'
import { render } from 'react-dom'

const TweetsContainer = (props) =>
  <div className={props.mainClass}>
    {props.tweets.map((tweet, i) =>
      <div className={props.childClass} id={tweet.id} key={i}>
        <p className='tweetText'>"{tweet.tweet}"</p>
        <p className='voteText'>{tweet.vote}</p>
        <button onClick={() => props.dispatch({type: 'UP_VOTE', payload: tweet.id})}>+</button>
        <button onClick={() => props.dispatch({type: 'DOWN_VOTE', payload: tweet.id})}>-</button>
      </div>
     )}
  </div>

module.exports = TweetsContainer
