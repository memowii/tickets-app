import * as types from './mutation_types';

export default {
  [types.POPULATE_TICKET_TABLE] (state, tickets) {
    state.tickets = tickets;
  },
  [types.UPDATE_TICKET] (state, ticket) {
    ticket.esta_usado = ticket.esta_usado === 0 ? 1 : 0;
  }
}
