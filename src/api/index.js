import Vue from 'vue';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.use(VueResource);

const TicketsResource = Vue.resource('http://localhost:3000/api/v1/' + 'tickets{/id}');

export default {
  fetchTickets: () => {
    return TicketsResource.get()
  },
  updateTicket: (data) => {
    return TicketsResource.update({ id: data.id }, data)
  },
  sendCSVFile: (data) => {
    return axios.post('http://localhost:3000/api/v1/csvfiles', data);
  }
}
