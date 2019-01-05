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
})