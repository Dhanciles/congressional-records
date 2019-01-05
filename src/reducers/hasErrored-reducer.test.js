import { hasErroredReducer } from './hasErrored-reducer'

describe('hasErroredReducer', () => {
  it('should return default state', () => {
    const expected = false

    const result = hasErroredReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})