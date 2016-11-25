const redux = require('redux')
const clone = require('clone')
const loadTweets = require('./apiCalls').loadTweets
const sendVotes =require('./apiCalls').sendVotes

module.exports = function reducer (state, action){
  let newState = clone(state)
  const {type, payload} = action
  switch (type) {
    case 'LOADING_TWEETS':
      newState.loadTweets = true
      return newState
    case 'INIT':
      newState.loadTweets = false
      newState.tweets = payload
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
        if(tweet.id === payload && !tweet.upVoted && !tweet.downVoted){
          tweet.votes++
          tweet.upVoted = true
          sendVotes(tweet)
        } else if (tweet.id === payload && tweet.upVoted) {
          tweet.votes--
          tweet.upVoted = false
          sendVotes(tweet)
        } else if (tweet.id === payload && tweet.downVoted){
          tweet.votes += 2
          tweet.upVoted = true
          tweet.downVoted = false
          sendVotes(tweet)
        }
      })
      return newState
    case 'DOWN_VOTE':
      newState.tweets.forEach((tweet) => {
        if(tweet.id === payload && !tweet.upVoted && !tweet.downVoted){
          tweet.votes--
          tweet.downVoted = true
          sendVotes(tweet)
        } else if (tweet.id === payload && tweet.downVoted) {
          tweet.votes++
          tweet.downVoted = false
          sendVotes(tweet)
        } else if (tweet.id === payload && tweet.upVoted){
          tweet.votes -= 2
          tweet.upVoted = false
          tweet.downVoted = true
          sendVotes(tweet)
        }
      })
      return newState
    default:
      return newState
  }
}
