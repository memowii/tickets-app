import { POPULATE_TICKETS, UPDATE_TICKET, RESTORE_TICKET } from './mutation_types';
import api from  '../api';

export default {
  populateTickets: ({ commit }) => {
    return api.fetchTickets().then(response => {
      commit(POPULATE_TICKETS, response.data);
    });
  },
  updateTicket: (store, ticket, ticketCopy) => {
    return api.updateTicket(ticket).catch(() => {
      store.commit(RESTORE_TICKET, ticketCopy);
    });
  },
  uploadCSVFile: (store, CSVForm) => {
    return api.sendCSVFile(CSVForm).then((res) => {
      return res.data;
    });
  },
}
