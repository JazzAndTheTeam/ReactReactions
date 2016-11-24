const redux = require('redux')
const clone = require('clone')

module.exports = function reducer (state, action){
  let newState = clone(state)

  switch (action.type) {
    case 'INIT':
      newState.tweets.forEach((tweet) => {
        if(tweet.vote >= 0){
          newState.posTweets.push(tweet)
        } else {
          newState.negTweets.push(tweet)
        }
      })
      return newState
    case 'UP_VOTE':
      newState.tweets.forEach((tweet) => {
        if(tweet.id === action.payload && !tweet.upVoted && !tweet.downVoted){
          tweet.vote++
          tweet.upVoted = true
        } else if (tweet.id === action.payload && tweet.upVoted) {
          tweet.vote--
          tweet.upVoted = false
        } else if (tweet.id === action.payload && tweet.downVoted){
          tweet.vote += 2
          tweet.upVoted = true
          tweet.downVoted = false
        }
      })
      return newState
    case 'DOWN_VOTE':
      newState.tweets.forEach((tweet) => {
        if(tweet.id === action.payload && !tweet.upVoted && !tweet.downVoted){
          tweet.vote--
          tweet.downVoted = true
        } else if (tweet.id === action.payload && tweet.downVoted) {
          tweet.vote++
          tweet.downVoted = false
        } else if (tweet.id === action.payload && tweet.upVoted){
          tweet.vote -= 2
          tweet.upVoted = false
          tweet.downVoted = true
        }
      })
      return newState
    default:
      return newState
  }
}
