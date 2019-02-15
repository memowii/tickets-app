import * as types from './mutation_types';
import getters from './getters';

export default {
  [types.POPULATE_TICKETS] (state, tickets) {
    state.tickets = tickets;
  },
  [types.RESTORE_TICKET] (state, copyTicket) {
    const storedTicket = getters.getTicketById(state, copyTicket.id);
    storedTicket.esta_usado = copyTicket.esta_usado;
    storedTicket.comentario = copyTicket.comentario;
    storedTicket.esta_usado = copyTicket.esta_usado;
  }
}
