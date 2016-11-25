import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
const reducer = require('./reducer')
const App = require('./components/app')
const loadTweets = require('./apiCalls').loadTweets

const initialState = {
  tweets: [
    {id: 1, tweet: "React sucks", votes: 3, upVoted: false, downVoted: false},
    {id: 2, tweet: "I LOVE REACT", votes: -3, upVoted: false, downVoted: false}
  ],
  posTweets: [],
  negTweets: [],
  loadingTweets: false
}

const main = document.querySelector('main')
const store = createStore(reducer, initialState)

store.subscribe(function () {
  const state = store.getState()
  render(<App state={state} dispatch={store.dispatch} />, main)
})

function init() {
  loadTweets(store.dispatch)
}

init()
