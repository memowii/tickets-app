<template>
  <div id="app">
    <TicketsTable v-bind:tickets="tickets"
                  v-on:copy-consecutivo="copyConsecutivo"
                  v-on:check-uncheck-ticket="checkUncheckTicket" />
    <input id="clipboard-input" type="hidden" />
  </div>
</template>

<script>
  import TicketsTable from './components/TicketsTable';
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
      TicketsTable
    },
    data() {
      return {
        tickets: null,
        isSnackbarShown: false,
        snackbarConsecutivo: null
      };
    },
    created() {
      axios.get('http://localhost:3000/tickets').then(response => {
        this.tickets = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    methods: {
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
      checkUncheckTicket: function (ticket) {
        ticket.esta_usado = ticket.esta_usado === 0 ? 1 : 0;

        axios.put(`http://localhost:3000/tickets/${ticket.id}`, ticket)
          .then(response => {
            console.log(response);
        });
      },
      scrollToLastUsedTicket: function () {
        let tempAnchorTag = document.createElement('a');
        tempAnchorTag.setAttribute('href', '#last-ticket');
        tempAnchorTag.innerHTML = 'temp';

        this.$el.appendChild(tempAnchorTag);

        tempAnchorTag.click();
        tempAnchorTag.parentNode.removeChild(tempAnchorTag);
      },
    },
    updated() {
      this.$nextTick(function () {
        this.scrollToLastUsedTicket();
      });
    }
  }
</script>

<style lang="scss">

</style>
