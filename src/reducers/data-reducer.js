export const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_DATA_SUCCESS': 
      return {...state, [action.query]: action.data}
    case 'TRACK_BILL': 
      const data = state[action.query].map(item => {
        if (item.billId === action.billId) {
          item.tracked = !item.tracked
          return item
        } else {
          return item
        }
      })
      return {...state, [action.query]: data}
    default: 
      return state
  }
}