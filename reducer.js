const redux = require('redux')
const clone = require('clone')

module.exports = function reducer (state, action){
  let newState = clone(state)

  switch (action.type) {
    case 'INIT':
      return newState
    default:
      return newState
  }
}
