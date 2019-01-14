<template>
  <table id="table-numero-consecutivo-ticket">
    <tr>
      <th>Número consecutivo de ticket</th>
      <th>Acciones</th>
    </tr>
    <TicketTableRow v-bind:id="[index === countUsedTickets ? 'last-ticket' : '']"
                    v-for="(ticket, index) in tickets" :key="ticket.id"
                    v-bind:ticket="ticket"/>
  </table>
</template>

<script>
  import TicketTableRow from './TicketTableRow';
  import { mapGetters } from 'vuex';

  export default {
    name: "TicketsTable",
    components: {
      TicketTableRow
    },
    computed: {
      ...mapGetters({
        tickets: 'getTickets',
      }),
      ...mapGetters(['countUsedTickets']),
    },
  }
</script>

<style scoped>

</style>
