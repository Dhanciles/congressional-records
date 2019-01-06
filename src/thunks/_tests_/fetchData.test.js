import { fetchData } from '../fetchData'; 
import { isLoading, hasErrored, fetDatatSuccess } from '../../actions/index.js'; 
import { cleanBill } from '../../helper/helper.js'; 
import { immigrationBillData } from '../../../mockBillData.js'; 

describe('fetchData', () => {
  let mockUrl
  let mockQuery 
  let mockDispatch
  let mockData

  beforeEach(() => {
    mockUrl = 'www.getdata.web'
    mockQuery = 'rare data'
    mockDispatch = jest.fn()
    mockData = immigrationBillData
  })

  it('should call dispatch with the isLoading action', async () => {
    const thunk = fetchData(mockUrl, mockQuery)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  it('should dispatch hasErrored if our response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))

    const thunk = fetchData(mockUrl, mockQuery)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  })
  it('should dispatch isLoading(false) if our response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    const thunk = fetchData(mockUrl, mockQuery)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })
  it('should call cleanBill with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true, 
      json: () =>  Promise.resolve(mockData)
    }))

    const thunk = fetchData(mockUrl, mockQuery)

    await thunk(mockDispatch)

    expect(cleanBill).toHaveBeenCalledW

  })
})