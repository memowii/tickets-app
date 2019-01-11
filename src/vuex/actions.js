import { POPULATE_TICKET_TABLE } from './mutation_types';
import api from  '../api';

export default {
  populateTicketTable: ({ commit }) => {
    return api.fetchTickets().then(response => {
      commit(POPULATE_TICKET_TABLE, response.data);
    });
  }
}
