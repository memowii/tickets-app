<template>
  <div id="csv-form">
    <p>Sube un archivo CSV con <br> más números consecutivos</p>
    <form @submit.prevent="onUpload">
      <input type="file" name="csvfile" accept=".csv" multiple />
      <input type="submit" value="Enviar archivo" />
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "CSVForm",
    methods: {
      ...mapActions(['uploadCSVFile', 'populateTickets']),
      onUpload: function (event) {
        const CSVFiles = event.target.elements[0].files;
        if (!CSVFiles.length) {
          alert('Debe seleccionar al menos un archivo tipo .csv');
          return;
        }

        for (let CSVFile of Object.values(CSVFiles)) {
          if (!CSVFile.name.toLowerCase().endsWith('.csv') || CSVFile.type !== 'text/csv') {
            alert(`El archivo ${CSVFile.name} debe de ser de tipo csv (comma-separated values).`);
            return;
          }
        }

        const form = new FormData();
        for (let CSVFile of Object.values(CSVFiles)) {
          form.append('csvfile', CSVFile, CSVFile.name);
        }

        this.uploadCSVFile(form).then((result) => {
          alert(result.message);
          location.reload();
        });
      }
    }
  }
</script>

<style scoped>

</style>
