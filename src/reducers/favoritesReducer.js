export const favoritesReducer = (state=[], action) => {
  console.log('kool')
  switch(action.type) {
    case 'ADD_FAVORITE': 
    console.log('add')
      return [...state, action.bill]
    case 'REMOVE_FAVORITE':
    console.log('remove')    
      return state.filter(item => item.billId !== action.bill.billId)
    default: 
      return state
  }
}
