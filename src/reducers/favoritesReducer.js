export const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE': 
      return [...state, action.bill]
    case 'REMOVE_FAVORITE':    
      return state.filter(item => item.billId !== action.bill.billId)
    default: 
      return state
  }
}
