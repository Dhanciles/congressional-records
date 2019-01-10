import { combineReducers } from 'redux'
import { dataReducer } from './data-reducer'
import { setFilterReducer } from './setFilter-reducer'
import { isLoadingReducer } from './isLoading-reducer'
import { hasErroredReducer } from './hasErrored-reducer'
import { redirectReducer } from './redirectReducer'
import { favoritesReducer } from './favoritesReducer'


export const rootReducer = combineReducers({
  loading: isLoadingReducer, 
  error: hasErroredReducer, 
  selection: setFilterReducer, 
  data: dataReducer, 
  redirect: redirectReducer, 
  favorites: favoritesReducer
})