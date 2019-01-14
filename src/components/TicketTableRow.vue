<template>
  <tr>
    <td v-bind:class="{ 'consecutivo-marcado': ticket.esta_usado !== 0 }">
      {{ ticket.consecutivo }}
    </td>
    <td>
      <div>
        <button class="copiar" type="button" @click="copyConsecutivo(ticket.consecutivo)">Copiar</button>
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
    mounted() {
      this.$nextTick(function () {
        this.scrollToLastUsedTicket();
      });
    },
    methods: {
      ...mapActions(['updateTicket']),
      markUnmarkTicket: function (ticket) {
        this.updateTicket(ticket);
      },
      setButtonText: function (esta_usado) {
        return esta_usado === 1 ? 'Desmarcar' : 'Marcar'
      },
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
      scrollToLastUsedTicket: function () {
        if (this.$el.id !== 'last-ticket') {
          return;
        }

        let tempAnchorTag = document.createElement('a');
        tempAnchorTag.setAttribute('href', '#last-ticket');
        tempAnchorTag.innerHTML = 'temp';

        this.$el.appendChild(tempAnchorTag);

        tempAnchorTag.click();
        tempAnchorTag.parentNode.removeChild(tempAnchorTag);
      },
    }
  }
</script>

<style scoped>

</style>
