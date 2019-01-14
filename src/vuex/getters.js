export default {
  getTickets: state => state.tickets,
  getTicketById: (state, id) => {
    return state.tickets.find(ticket => ticket.id === id);
  },
  countUsedTickets: (state) => {
    return Object.entries(state.tickets).filter(arrayElement => {
      let ticket = arrayElement [1];
      return ticket.esta_usado === 1
    }).length
  },
}
