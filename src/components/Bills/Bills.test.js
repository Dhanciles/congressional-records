import React from 'react'; 
import { shallow } from 'enzyme'; 
import { Bills }  from './Bills'

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
})