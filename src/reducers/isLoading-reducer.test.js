import { isLoadingReducer } from './isLoading-reducer'

describe('isLoadingReducer', () => {
  it('should return default state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should update state if our request is loading', () => {
    const action = {
      type: 'IS_LOADING', 
      isLoading: true
    }

    const expected = true

    const result = isLoadingReducer(false, action)

    expect(result).toEqual(expected)
  })
})