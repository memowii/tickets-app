import { POPULATE_TICKET_TABLE, UPDATE_TICKET } from './mutation_types';
import api from  '../api';
import getters from './getters';

export default {
  populateTicketTable: ({ commit }) => {
    return api.fetchTickets().then(response => {
      commit(POPULATE_TICKET_TABLE, response.data);
    });
  },
  updateTicket: (store, ticket) => {
    let ticketCopy = Object.assign({}, ticket);
    ticketCopy.esta_usado = ticketCopy.esta_usado === 0 ? 1 : 0;

    return api.updateTicket(ticketCopy).then(() => {
      store.commit(UPDATE_TICKET, ticket);
    });
  },
}
