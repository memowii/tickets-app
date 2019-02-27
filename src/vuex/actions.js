import { POPULATE_TICKETS, UPDATE_TICKET, RESTORE_TICKET, MARK_UNMARK_TICKET, APPLY_TICKET_MEMENTO } from './mutation_types';
import api from  '../api';

export default {
  populateTickets: ({ commit }) => {
    return api.fetchTickets().then(response => {
      commit(POPULATE_TICKETS, response.data);
    });
  },
  updateMarkUnmarkTicket: (store, ticket) => {
    store.commit(MARK_UNMARK_TICKET, ticket);
    return api.updateTicket(ticket).catch(() => {
      store.commit(RESTORE_TICKET, ticket);
    });
  },
  updateTicketComentario: (store, ticket) => {
    return api.updateTicket(ticket).catch(() => {
      alert('Hubo un problema al actualizar su ticket.\nRefresque la página y vuelva a intentarlo.')
    });
  },
  uploadCSVFile: (store, CSVForm) => {
    return api.sendCSVFile(CSVForm).then((res) => {
      return res.data;
    });
  },
}
