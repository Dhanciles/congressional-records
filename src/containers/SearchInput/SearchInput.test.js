import React from 'react'; 
import { shallow } from 'enzyme'; 
import  { SearchInput }  from './SearchInput'; 

describe('SearchInput', () => {
  let wrapper 
  let mockFetchData = jest.fn()
  let mockUpdateSelection = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<SearchInput 
                        fetchData={mockFetchData}
                        updateSelection={mockUpdateSelection}
                        />)
  })
  it('should match the snapshot', () => {
    
    expect(wrapper).toMatchSnapshot()
  })
  it('should update call handleChange on OnChange event', () => {
    wrapper.handleChange = jest.fn()
    const event = {target: {name: 'search', value: 'health-care' }}
    wrapper.find('.search-input').simulate('change', event)
     

    expect(wrapper.handleChange).toHaveBeenCalled


  })

})