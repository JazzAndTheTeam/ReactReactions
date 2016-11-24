import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
const reducer = require('./reducer')
const TweetsView = require('./components/TweetsView')

const initialState = {
  tweets: [
    {id: 1, tweet: "React sucks", vote: 3},
    {id: 2, tweet: "I LOVE REACT", vote: -3}
  ],
  upVote: false,
  downVote: false,
  posTweets: [],
  negTweets: []
}

const main = document.querySelector('main')
const store = createStore(reducer, initialState)

store.subscribe(function () {
  const state = store.getState()
  render(< />, main)
})

store.dispatch({type: 'INIT'})
