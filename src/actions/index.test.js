import * as actions from './index'

describe('actions', () => {
  it('should return a type of IS_LOADING with a boolean', () => {
    const check = true

    const expectedAction = {
      type: 'IS_LOADING', 
      isLoading: true
    }

    const result = actions.isLoading(check)

    expect(result).toEqual(expectedAction)

  })
  it('should return a type of HAS_ERRORED with a boolean', () => {
    const check = false

    const expectedAction = {
      type: 'HAS_ERRORED', 
      hasErrored: check
    }

    const result = actions.hasErrored(check)
  })

  it('should return a type of FETCH_DATA_SUCCESS with data', () => {
    const data = [{
      bill: 'this is a bill', 
      active: false
    }]

    const expectedAction = {
      type: 'FETCH_DATA_SUCCESS', 
      data
    }

    const result = actions.fetchDataSuccess(data)

    expect(result).toEqual(expectedAction)
  })
})