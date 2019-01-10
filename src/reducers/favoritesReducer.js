export const favoritesReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE': 
      return [...state, action.billId]
    case 'REMOVE_FAVORITE':
      return state.filter(item => item.id !== action.billId)
    default: 
      return state
  }
}