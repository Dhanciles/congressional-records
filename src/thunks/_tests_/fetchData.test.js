import { fetchData } from '../fetchData'; 
import { isLoading, hasErrored, fetDatatSuccess, fetchDataSuccess } from '../../actions/index.js'; 
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

  it('should dispatch fetchDataSuccess if the response is ok',  async () => {
    const mockDataToStore = [{
      billId: mockData.results[0].bill_id, 
      sponsor: `${mockData.results[0].sponsor_title + mockData.results[0].sponsor_name + ', ' + mockData.results[0].sponsor_state}`, 
      title: mockData.results[0].title,
      committee: mockData.results[0].committees, 
      active: mockData.results[0].active, 
      lastVote: mockData.results[0].last_vote
    }]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true, 
      json: () => Promise.resolve(mockData)
    }))

    const thunk = fetchData(mockUrl, mockQuery)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(fetchDataSuccess(mockDataToStore, mockQuery))
  })
})