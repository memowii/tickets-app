<template>
  <div id="csv-form">
    <p>Sube un archivo CSV con <br> más números consecutivos</p>
    <form @submit.prevent="onUpload">
      <input type="file" name="csvfile" />
      <input type="submit" value="Enviar archivo" />
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapActions } from 'vuex';

  export default {
    name: "CSVForm",
    methods: {
      ...mapActions(['uploadCSVFile']),
      onUpload: function (event) {
        let CSVFile = event.target.elements[0].files[0];

        if (typeof CSVFile === 'undefined') {
          alert('Debe seleccionar un archivo tipo .csv');
          return;
        }

        if (!CSVFile.name.toLowerCase().endsWith('.csv')) {
          alert('El archivo a enviar debe de ser tipo csv (comma-separated values)');
          return;
        }

        let form = new FormData();
        form.append('csvfile', CSVFile, CSVFile.name);

        this.uploadCSVFile(form);
      }
    }
  }
</script>

<style scoped>

</style>
