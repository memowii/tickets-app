<template>
  <div id="app">
    <div id="buttons-section">
      <div id="last-ticket-button">
        <button v-on:click="scrollToLastUsedTicket">
          Ir al último ticket.
        </button>
      </div>
      <CSVForm />
    </div>
    <TicketsTable />
    <input id="clipboard-input" type="hidden" />
  </div>
</template>

<script>
  import TicketsTable from './components/TicketsTable';
  import CSVForm from './components/CSVForm';
  import { mapActions } from 'vuex';

  export default {
    name: 'App',
    components: {
      TicketsTable,
      CSVForm,
    },
    created () {
      this.populateTickets();
    },
    methods: {
      ...mapActions(['populateTickets']),
      scrollToLastUsedTicket: function () {
        let tempAnchorTag = document.createElement('a');
        tempAnchorTag.setAttribute('href', '#last-ticket');
        tempAnchorTag.innerHTML = 'temp';

        this.$el.appendChild(tempAnchorTag);

        tempAnchorTag.click();
        tempAnchorTag.parentNode.removeChild(tempAnchorTag);
      },
    },
  }
</script>

<style lang="scss">

</style>
