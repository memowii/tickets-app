<template>
  <div id="app">
    <TicketsTable />
    <input id="clipboard-input" type="hidden" />
  </div>
</template>

<script>
  import TicketsTable from './components/TicketsTable';
  import { mapActions } from 'vuex';

  export default {
    name: 'App',
    components: {
      TicketsTable
    },
    created () {
      this.populateTickets();
    },
    methods: {
      ...mapActions(['populateTickets']),
    },
  }
</script>

<style lang="scss">

</style>
