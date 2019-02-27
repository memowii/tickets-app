import * as types from './mutation_types';
import { setMementofuncs, CareTaker } from '../utils';

const caretaker = new CareTaker();

export default {
  [types.POPULATE_TICKETS] (state, tickets) {
    setMementofuncs(tickets);
    state.tickets = tickets;
  },
  [types.RESTORE_TICKET] (state, ticket) {
    ticket.dehydrate(caretaker.get(ticket.id));
  },
  [types.MARK_UNMARK_TICKET] (state, ticket) {
    this.commit('APPLY_TICKET_MEMENTO', ticket);
    ticket.esta_usado = ticket.esta_usado === 0 ? 1 : 0;
  },
  [types.APPLY_TICKET_MEMENTO] (state, ticket) {
    caretaker.add(ticket.id, ticket.hydrate());
  },
}
