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

module.exports = {
  loadTweets
}
