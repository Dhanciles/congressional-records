import { dataReducer } from './data-reducer'

describe('dataReducer', () => {
  it('should return default state', () => {
    const expected = {}

    const result = dataReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})