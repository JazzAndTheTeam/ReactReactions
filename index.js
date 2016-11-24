import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
const reducer = require('./reducer')
const App = require('./components/app')

const initialState = {
  tweets: [
    {id: 1, tweet: "React sucks", vote: 3},
    {id: 2, tweet: "I LOVE REACT", vote: -3}
  ],
  posTweets: [],
  negTweets: []
}

const main = document.querySelector('main')
const store = createStore(reducer, initialState)

store.subscribe(function () {
  const state = store.getState()
  render(<App state={state} dispatch={store.dispatch} />, main)
})

store.dispatch({type: 'INIT'})
