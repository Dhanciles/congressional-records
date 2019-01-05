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
})