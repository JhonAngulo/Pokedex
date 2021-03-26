import * as types from '../types'

const initialState = {
  list: [],
  selected: 4,
  error: null
}

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHARACTERS_SET:
      return {
        ...state,
        list: action.payload,
        error: null
      }
    case types.CHARACTERS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default characterReducer
