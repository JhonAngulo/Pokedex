import * as types from '../types'

const initialState = {
  list: [],
  seleted: {},
  error: null
}

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CHARACTERS:
      return {
        ...state,
        list: action.payload,
        error: null
      }
    default:
      return state
  }
}

export default characterReducer
