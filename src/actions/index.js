export const isLoading = (check) => ({
  type: 'IS_LOADING', 
  isLoading: check
})

export const hasErrored = (check) => ({
  type: 'HAS_ERRORED', 
  hasErrored: check
})

export const fetchDataSuccess = (data, query) => ({
  type: 'FETCH_DATA_SUCCESS', 
  data, 
  query
})

export const seachSubject = (text) => ({
  type: 'SEARCH_SUBJECT', 
  text
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER', 
  filter
})

export const redirect = (check) => ({
  type: 'REDIRECT', 
  redirect: check
})

export const trackBill = (billId, query) => ({
  type: 'TRACK_BILL',
  trackedBills: {
    billId, 
    query
  }
})

export const addFavorites = (billId) => ({
  type: 'ADD_FAVORITE', 
  billId
})

export const removeFavorites = (billId) => ({
  type: 'REMOVE_FAVORITE', 
  billId
})
