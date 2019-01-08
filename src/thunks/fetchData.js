import { isLoading, hasErrored, fetchDataSuccess } from '../actions/index.js'; 
import { cleanBill } from '../helper/helper.js';
import { proPublicaKey } from '../../src/constants.js'; 

export const fetchData = (url, query) => { 
  return async (dispatch) => {
    const key = proPublicaKey
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        headers: {
          'X-API-KEY': key
        }
      })
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      const dataToStore = cleanBill(data, query)
      dispatch(fetchDataSuccess(dataToStore, query))
    } catch(error) {
      dispatch(hasErrored(true))
    }
  }

}