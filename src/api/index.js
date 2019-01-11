import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const TicketsResource = Vue.resource('http://localhost:3000/tickets{/id}');

export default {
  fetchTickets: () => {
    return TicketsResource.get()
  },
  /*updateShoppingList: (data) => {
    return ShoppingListsResource.update({ id: data.id }, data)
  },*/
}
