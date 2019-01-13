import * as types from './mutation_types';
import getters from './getters';

export default {
  [types.POPULATE_TICKET_TABLE] (state, tickets) {
    state.tickets = tickets;
  },
  [types.UPDATE_TICKET] (state, ticket) {
    // let updatedTicket = getters.getTicketById(state, ticket.id);
    // updatedTicket.esta_usado = updatedTicket.esta_usado === 0 ? 1 : 0;
    ticket.esta_usado = ticket.esta_usado === 0 ? 1 : 0;
  }
}
