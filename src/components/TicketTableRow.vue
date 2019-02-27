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
        lastSetTimeoutId: null,
      }
    },
    methods: {
      ...mapActions(['updateTicket', 'updateMarkUnmarkTicket', 'updateTicketComentario']),
      markUnmarkTicket: function (ticket) {
        this.updateMarkUnmarkTicket(ticket);
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
        clearTimeout(this.lastSetTimeoutId);
        this.lastSetTimeoutId = setTimeout(() => {
          this.updateTicketComentario(ticket);
        }, 200);
      },
    }
  }
</script>

<style scoped>

</style>
