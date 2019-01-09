export const redirectReducer = (state=false, action) => {
  switch(action.type) {
    case 'REDIRECT':
      return action.redirect
    default: 
      return state
  }
}