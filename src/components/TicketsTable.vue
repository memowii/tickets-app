<template>
  <table id="table-numero-consecutivo-ticket">
    <tr>
      <th>Número consecutivo de ticket</th>
      <th>Acciones</th>
    </tr>
    <tr v-for="ticket in tickets">
      <td>{{ ticket.consecutivo }}</td>
      <td>
        <div>
          <button class="copiar" type="button" @click="copy(ticket.consecutivo)">Copiar</button>
          <button class="marcar-desmarcar" type="button" v-bind:value="ticket.id">
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
    methods: {
      setButtonText: function (esta_usado) {
        return esta_usado === 1 ? 'Desmarcar' : 'Marcar'
      },
      copy: function (consecutivo) {
        this.$emit('copy-consecutivo', consecutivo)
      }
    }
  }
</script>

<style scoped>

</style>
