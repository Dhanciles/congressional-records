import { combineReducers } from 'redux'
import { dataReducer } from './data-reducer'
import { setFilterReducer } from './setFilter-reducer'
import { isLoadingReducer } from './isLoading-reducer'
import { hasErroredreducer } from './hasErrored-reducer'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer, 
  hasErrored: hasErroredreducer, 
  filterSelection: setFilterReducer, 
  data: dataReducer
})