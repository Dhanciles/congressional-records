import { setFilterReducer } from './setFilter-reducer'

describe('setFilterReducer', () => {
  it('should return default state', () => {
    const expected = ''

    const result = setFilterReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})