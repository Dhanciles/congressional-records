import { isLoadingReducer } from './isLoading-reducer'

describe('isLoadingReducer', () => {
  it('should return default state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})