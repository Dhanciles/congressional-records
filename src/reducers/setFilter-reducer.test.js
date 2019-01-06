import { setFilterReducer } from './setFilter-reducer'

describe('setFilterReducer', () => {
  it('should return default state', () => {
    const expected = ''

    const result = setFilterReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should update state if a new filter has been set', () => {
    const action = {
      type: 'SET_FILTER', 
      filter: 'Recent Votes'
    }

    const expected = 'Recent Votes'

    const result = setFilterReducer('', action)

    expect(result).toEqual(expected)
  })
})