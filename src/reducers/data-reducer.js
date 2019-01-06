export const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_DATA_SUCCESS': 
      return {...state, [action.query]: action.data}
    default: 
      return state
  }
}