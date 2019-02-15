<template>
  <tr>
    <td v-bind:class="{ 'consecutivo-marcado': ticket.esta_usado !== 0 }">
      {{ ticket.consecutivo }}
    </td>
    <td>
      <textarea name="" id="" cols="25" rows="3" v-model="ticket.comentario" v-on:keydown="updateComentario(ticket)">
        {{ ticket.comentario }}
      </textarea>
    </td>
    <td>
      <div>
        <button class="copiar" type="button"  @click="copyConsecutivo(ticket.consecutivo)">Copiar</button>
        <button class="marcar-desmarcar" type="button" @click="markUnmarkTicket(ticket)">
          {{ setButtonText(ticket.esta_usado) }}
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "TicketTableRow",
    props: ['ticket'],
    data() {
      return {
        i: 0,
        lastSetTimeoutId: null,
      }
    },
    methods: {
      ...mapActions(['updateTicket']),
      markUnmarkTicket: function (ticket) {
        const ticketCopy = Object.assign({}, ticket);
        ticket.esta_usado = ticket.esta_usado === 0 ? 1 : 0;
        this.updateTicket(ticket, ticketCopy);
      },
      setButtonText: function (esta_usado) {
        return esta_usado === 1 ? 'Desmarcar' : 'Marcar'
      },
      copyConsecutivo: function (consecutivo) {
        const clipboardInput = document.querySelector('#clipboard-input');
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
      updateComentario: function (ticket) {
        const ticketCopy = Object.assign({}, ticket);
        clearTimeout(this.lastSetTimeoutId);
        this.lastSetTimeoutId = setTimeout(() => {
          this.updateTicket(ticket, ticketCopy);
        }, 200);
      },
    }
  }
</script>

<style scoped>

</style>
