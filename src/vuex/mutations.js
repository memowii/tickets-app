import * as types from './mutation_types';
import getters from './getters';

export default {
  [types.POPULATE_TICKET_TABLE] (state, tickets) {
    state.tickets = tickets;
  }
}
