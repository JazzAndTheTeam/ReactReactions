import React from 'react'
import { render } from 'react-dom'

const TweetsContainer = (props) =>
  <div className={props.mainClass}>
    {sortByKey(props).map((tweet, i) =>
      <div className={props.childClass} id={tweet.id} key={i}>
        <p className='tweetText'>"{tweet.tweet}"</p>
        <p className='voteText'>{tweet.votes}</p>
        <button title="up vote" className={customClass(tweet)} onClick={() => props.dispatch({type: 'UP_VOTE', payload: tweet.id})}>+</button>
        <button title="down vote" className={customClass(tweet)} onClick={() => props.dispatch({type: 'DOWN_VOTE', payload: tweet.id})}>-</button>
      </div>
     )}
  </div>

module.exports = TweetsContainer

function sortByKey(props) {
    return props.tweets.sort(function(a, b) {
        var x = a['votes']; var y = b['votes'];
        if(props.mainClass === 'neg'){
          return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        }
        return ((x > y) ? -1 : ((x < y) ? 1 : 0))
    })
}

function customClass(tweet){
  if(tweet.upVoted || tweet.downVoted){
    return "clicked"
  }
}
