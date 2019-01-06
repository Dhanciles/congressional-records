export const cleanBill = (data) => {
  return data.results.map(item => ({
    billId: item.bill_id,
    sponsor: `${item.sponsor_title + item.sponsor_name + ', ' + item.sponsor.state}`, 
    title: item._title, 
    committee: item.committees, 
    active: item.active, 
    lastVote: item.last_vote
  }))
}