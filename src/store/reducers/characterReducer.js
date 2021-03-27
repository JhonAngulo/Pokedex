import * as types from '../types'

const initialState = {
  list: [],
  selected: {},
  error: null
}

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHARACTERS_SET:
      return {
        ...state,
        list: [...state.list, ...action.payload],
        error: null
      }
    case types.CHARACTERS_SELECTED_CHANGE:
      return {
        ...state,
        selected: action.payload,
        error: null
      }
    case types.SET_SEARCH_ERROR:
      return {
        ...state,
        selected: {},
        error: action.payload
      }
    default:
      return state
  }
}

export default characterReducer
