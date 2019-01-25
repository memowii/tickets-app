import { POPULATE_TICKETS, UPDATE_TICKET } from './mutation_types';
import api from  '../api';

export default {
  populateTickets: ({ commit }) => {
    return api.fetchTickets().then(response => {
      commit(POPULATE_TICKETS, response.data);
    });
  },
  updateTicket: (store, ticket) => {
    let ticketCopy = Object.assign({}, ticket);
    ticketCopy.esta_usado = ticketCopy.esta_usado === 0 ? 1 : 0;

    return api.updateTicket(ticketCopy).then(() => {
      store.commit(UPDATE_TICKET, ticket);
    });
  },
  uploadCSVFile: (store, CSVForm) => {
    return api.sendCSVFile(CSVForm).then((res) => {
      return res.data;
    });
  },
}
