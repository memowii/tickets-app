<template>
  <table id="table-numero-consecutivo-ticket">
    <tr>
      <th>Número consecutivo de ticket</th>
      <th>Acciones</th>
    </tr>
    <tr v-bind:id="[index === countUsedTickets ? 'last-ticket' : '']" v-for="(ticket, index) in tickets">
      <td v-bind:class="{ 'consecutivo-marcado': ticket.esta_usado !== 0 }">
        {{ ticket.consecutivo }}
      </td>
      <td>
        <div>
          <button class="copiar" type="button" @click="copy(ticket.consecutivo)">Copiar</button>
          <button class="marcar-desmarcar" type="button" @click="checkUncheckTicket(ticket)">
            {{ setButtonText(ticket.esta_usado) }}
          </button>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "TicketsTable",
    computed: {
      ...mapGetters({
        tickets: 'getTickets'
      }),
      countUsedTickets: function () {
        return Object.entries(this.tickets).filter(arrayElement => {
          let ticket = arrayElement [1];
          return ticket.esta_usado === 1
        }).length
      }
    },
    methods: {
      setButtonText: function (esta_usado) {
        return esta_usado === 1 ? 'Desmarcar' : 'Marcar'
      },
      copy: function (consecutivo) {
        this.$emit('copy-consecutivo', consecutivo)
      },
      checkUncheckTicket: function (ticket) {
        this.$emit('check-uncheck-ticket', ticket);
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

<style scoped>

</style>
