export const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_DATA_SUCCESS': 
      return {
        [key]: action.data
      }
    default: 
      return state
  }
}