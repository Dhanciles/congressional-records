import { isLoading, hasErrored, fetchDataSuccess } from '../actions/index.js'; 
import { cleanBill } from '../helper/helper.js'; 

export const fetchData = (url, query) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      const dataToStore = await cleanBill(data)
      dispatch(fetchDataSuccess(dataToStore, query))
    } catch(error) {
      dispatch(hasErrored(true))
    }
  }

}