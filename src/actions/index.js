export const isLoading = (check) => ({
  type: 'IS_LOADING', 
  isLoading: check
})

export const hasErrored = (check) => ({
  type: 'HAS_ERRORED', 
  hasErrored: check
})

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS', 
  data
})

export const seachSubject = (text) => ({
  type: 'SEARCH_SUBJECT', 
  text
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER', 
  filter
})