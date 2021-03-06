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
  it('should update call handleChange on onChange event', () => {
    wrapper.handleChange = jest.fn()
    const event = {target: {name: 'search', value: 'health-care' }}
    
    wrapper.find('.search-input').simulate('change', event)
  
    expect(wrapper.handleChange).toHaveBeenCalled
  })
  it('should update state when handleChange is invoked', () => {
    const expected = {subject: 'health-care'}
    const event = {target: {name: 'search', value: 'health-care' }}

    wrapper.instance().handleChange(event)

    expect(wrapper.state()).toEqual(expected)
  })
  it('should invoke handleSubmit when the subject has been given', () => {
    const event = {target: {}, preventDefault: () => {}}

    wrapper.find('.search-input').simulate('keypress', {key: 'Enter'}, event)

    expect(wrapper.handleSubmit).toHaveBeenCalled

  })
  it('should invoke updateSelection with the correct params', () => {
    const event = {target: {name: 'search', value: 'Health Care' }}
    
    wrapper.setState({subject: 'Health Care'})
    wrapper.instance().handleSubmit(event)

    expect(mockUpdateSelection).toHaveBeenCalledWith('Heath Care')
  })

})