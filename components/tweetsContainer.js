import React from 'react'
import { render } from 'react-dom'

const TweetsView = (props) => {
  <div class={props.mainClass}>
    {props.tweets.map((tweet) =>
      <div class={props.childClass} id={tweet.id}>
        <p class='tweetText'>{tweet.tweet}</p>
        <p class='voteText'>{tweet.vote}</p>
        <button onClick={() => props.dispatch({type: 'UP_VOTE'})}>+</button>
        <button onClick={() => props.dispatch({type: 'DOWN_VOTE'})}>-</button>
      </div>
     )}
  </div>
}


module.exports = TweetsView
