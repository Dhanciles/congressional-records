export const trackedBillsReducer = (state=[], action) => {
  switch(action.type) {
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