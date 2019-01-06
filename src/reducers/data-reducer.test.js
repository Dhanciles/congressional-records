import { dataReducer } from './data-reducer'

describe('dataReducer', () => {
  it('should return default state', () => {
    const expected = {}

    const result = dataReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should update state with our query as a key with a value of the data requested when a request is made', () => {
    const mockData = [1, 2, 3, 4, 5]
    const action = {
      type: 'FETCH_DATA_SUCCESS', 
      query: 'immigration bills', 
      data: mockData
    }

    const expected = {[action.query]: action.data}

    const result = dataReducer({}, action)

    expect(result).toEqual(expected)
  })
})