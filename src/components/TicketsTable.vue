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
  export default {
    name: "TicketsTable",
    props: ['tickets'],
    computed: {
      countUsedTickets: function () {
        return Object.entries(this.tickets).reduce((sum, current) =>
          sum + (current[1].esta_usado === 1), 0);
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
      }
    }
  }
</script>

<style scoped>

</style>
