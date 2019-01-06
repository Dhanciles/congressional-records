import { cleanBill } from './helper.js'
import { immigrationBillData } from '../../mockBillData'

describe('helper', () => {
  describe('cleanBill', () => {
    it('should return an object with the data we want', async () => {
      const mockData = immigrationBillData
      const expected = {
        billId: mockData.results[0].bill_id, 
        sponsor: `${mockData.results[0].sponsor_title + mockData.results[0].sponsor_name + ', ' + mockData.results[0].sponsor_state}`, 
        title: mockData.results[0].title,
        committee: mockData.results[0].committees, 
        active: mockData.results[0].active, 
        lastVote: mockData.results[0].last_vote
      }

      const result = await cleanBill(mockData)

      expect(result[0]).toEqual(expected)
    })
  })
  
})
