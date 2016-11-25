const request = require('superagent')

function loadTweets(dispatch) {
  dispatch({type: 'LOADING_TWEETS'})
  request
    .get('https://twitterreactions.herokuapp.com/api/v1/tweets')
    .end((err, res) =>{
      if(err) return err
      dispatch({type: 'INIT', payload: res.body})
    })
}

function sendVotes(tweet) {
  var tweetObject = { tweetId: tweet.id, voteCount: tweet.votes }
  request
    .post('https://twitterreactions.herokuapp.com/api/v1/tweets/vote')
    .send(tweetObject)
    .end(function(err, res){
      if(err) return
      console.log("database updated")
    })
}


module.exports = {
  loadTweets,
  sendVotes
}
