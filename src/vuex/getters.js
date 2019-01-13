export default {
  getTickets: state => state.tickets,
  getTicketById: (state, id) => {
    return state.tickets.find(ticket => ticke.id === id);
  },
}
