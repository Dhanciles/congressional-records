export const cleanBill = (data, query) => {
 switch(query) {
   case 'Recent Bills': 
    return exploreFilterBills(data)
   case 'Upcoming Bills': 
    return exploreFilterBills(data)
   default: 
    return searchAndPopularBills(data)
 }
}

export const exploreFilterBills = (data) => {
  const billsNeeded = exploreAdditionalCleaner(data)
  return billsNeeded.map(item => ({
    billId: item.bill_id,
    sponsor: `${item.sponsor_title + item.sponsor_name + ', ' + item.sponsor_state}`, 
    title: item.title, 
    committee: item.committees, 
    active: item.active, 
    lastVote: item.last_vote
  }))
}

export const exploreAdditionalCleaner = (data) => {
   return data.results.reduce((arr, item) => {
    item.bills.forEach(bill => {
      arr.push(bill)
    })
   return arr
 }, [])
}

export const searchAndPopularBills = (data) => {
  return data.results.map((item) => ({
    billId: item.bill_id,
    sponsor: `${item.sponsor_title + item.sponsor_name + ', ' + item.sponsor_state}`, 
    title: item.title, 
    committee: item.committees, 
    active: item.active, 
    lastVote: item.last_vote
  }))
}

export const checkBaseItemName = (item) => {
  switch(item) {
    case 'Recent Bills': 
      return 'https://api.propublica.org/congress/v1/115/both/bills/introduced.json'
    case 'Upcoming Bills': 
      return 'https://api.propublica.org/congress/v1/bills/upcoming/house.json'
    case 'Recent Votes': 
      return 'https://api.propublica.org/congress/v1/house/votes/recent.json'
    default: 
      return undefined
  }
}

export const queryCheck = (text) => {
  const hasSpace = text.includes(' ')
  const newText  = hasSpace ? text.split(' ').join('-').toLowerCase() : text.toLowerCase()
  return newText
}

export const renderQuery = (query, data) => {
  const keys = Object.keys(data)
  return keys.find(key => ((data[key] === query)))
}

