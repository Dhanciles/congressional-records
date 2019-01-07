import { isLoading, hasErrored, fetchDataSuccess } from '../actions/index.js'; 
import { cleanBill } from '../helper/helper.js';
import { proPublicaKey } from '../constants.js'; 


export const fetchData = (url, query) => {
  const key = proPublicaKey
  const url = `"https://api.propublica.org/congress/v1/bills/subjects/${query}.json"`
  return async (dispatch) => {
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
      const dataToStore = await cleanBill(data)
      dispatch(fetchDataSuccess(dataToStore, query))
    } catch(error) {
      dispatch(hasErrored(true))
    }
  }

}