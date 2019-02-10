import React from 'react'; 
import { shallow } from 'enzyme'; 
import { Bills, mapStateToProps }  from './Bills'

describe('Bills', () => {
  it('should match the snapshot', () => {
    let mockBillId = "hconres283-110"
    let mockSponsor = "Rep.Donald M. Payne, NJ"
    let mockTitle = "Calling for a peaceful resolution to the current electoral crisis in Kenya."
    let mockCommitee = "House Foreign Affairs; Senate Foreign Relations"
    let mockActive = null
    let mockLastVote = "2008-02-07"

    const wrapper = shallow(<Bills
                              billId={mockBillId}
                              sponsor={mockSponsor}
                              title={mockTitle}
                              committee={mockCommitee}
                              active={mockActive}
                              lastVote={mockLastVote}
                            />)

    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an object with a favorites array', () => {
      const mockState = {
        favorites: [
          {
            billId: "hr6063-110", 
            sponsor: "Rep.Mark Udall, CO", 
            title: "To authorize the programs of the National Aeronautics and Space Administration, and for other purposes.", 
            committee: "House Science and Technology; Senate Commerce, Science, and Transportation",
            active: null, 
            lastVote: "2008-06-18", 
            tracked: true, 
            query: "climate"
          }, 
          {
            billId: "hr6089-111", 
            sponsor: "Rep.Mark Jose, UT", 
            title: "To authorize the programs for immigration.", 
            committee: "Senate Commerce",
            active: null, 
            lastVote: "2009-06-19", 
            tracked: true, 
            query: "immigration"
          }
        ], 
        loading: false, 
        error: false, 
        selection: "climate", 
        redirect: false
      }
      const expected = {
        favorites: [
          {
            billId: "hr6063-110", 
            sponsor: "Rep.Mark Udall, CO", 
            title: "To authorize the programs of the National Aeronautics and Space Administration, and for other purposes.", 
            committee: "House Science and Technology; Senate Commerce, Science, and Transportation",
            active: null, 
            lastVote: "2008-06-18", 
            tracked: true, 
            query: "climate"
          }, 
          {
            billId: "hr6089-111", 
            sponsor: "Rep.Mark Jose, UT", 
            title: "To authorize the programs for immigration.", 
            committee: "Senate Commerce",
            active: null, 
            lastVote: "2009-06-19", 
            tracked: true, 
            query: "immigration"
          }
        ]
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})