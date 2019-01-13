<template>
  <div id="app">
    <TicketsTable v-on:copy-consecutivo="copyConsecutivo"
                  v-on:mark-unmark-ticket="markUnmarkTicket" />
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
    mounted () {
      this.populateTicketTable();
    },
    methods: {
      ...mapActions(['populateTicketTable', 'updateTicket']),
      copyConsecutivo: function (consecutivo) {
        let clipboardInput = document.querySelector('#clipboard-input');
        clipboardInput.setAttribute('type', 'text');
        clipboardInput.value = consecutivo;
        clipboardInput.select();
        document.execCommand('copy');
        clipboardInput.setAttribute('type', 'hidden');
        window.getSelection().removeAllRanges();

        this.$snack.success({
          text: `El consecutivo ${consecutivo} ha sido copiado.`,
          button: 'ok',
        });
      },
      markUnmarkTicket: function (ticket) {
        this.updateTicket(ticket);
      },
    },
  }
</script>

<style lang="scss">

</style>
