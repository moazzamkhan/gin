import { combineReducers } from 'redux'


const things = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}


const ginApp = combineReducers({things})

export default ginApp