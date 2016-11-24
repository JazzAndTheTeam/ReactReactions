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
      return newState
    case 'DOWN_VOTE':
      return newState
    default:
      return newState
  }
}
