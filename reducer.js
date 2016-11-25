const redux = require('redux')
const clone = require('clone')
const loadTweets = require('./apiCalls').loadTweets

module.exports = function reducer (state, action){
  let newState = clone(state)

  switch (action.type) {
    case 'LOADING_TWEETS':
      newState.loadTweets = true
      return newState
    case 'INIT':
      newState.loadTweets = false
      newState.tweets = action.payload
      newState.tweets.forEach((tweet) => {
        if(tweet.votes >= 0){
          newState.posTweets.push(tweet)
        } else {
          newState.negTweets.push(tweet)
        }
      })
      return newState
    case 'UP_VOTE':
      newState.tweets.forEach((tweet) => {
        if(tweet.id === action.payload && !tweet.upVoted && !tweet.downVoted){
          tweet.votes++
          tweet.upVoted = true
        } else if (tweet.id === action.payload && tweet.upVoted) {
          tweet.votes--
          tweet.upVoted = false
        } else if (tweet.id === action.payload && tweet.downVoted){
          tweet.votes += 2
          tweet.upVoted = true
          tweet.downVoted = false
        }
      })
      return newState
    case 'DOWN_VOTE':
      newState.tweets.forEach((tweet) => {
        if(tweet.id === action.payload && !tweet.upVoted && !tweet.downVoted){
          tweet.votes--
          tweet.downVoted = true
        } else if (tweet.id === action.payload && tweet.downVoted) {
          tweet.votes++
          tweet.downVoted = false
        } else if (tweet.id === action.payload && tweet.upVoted){
          tweet.votes -= 2
          tweet.upVoted = false
          tweet.downVoted = true
        }
      })
      return newState
    default:
      return newState
  }
}
