<template>
  <div id="csv-form">
    <p>Sube un archivo CSV con <br> más números consecutivos</p>
    <form @submit.prevent="testform">
      <input type="file" name="image" />
      <input type="submit" value="Enviar archivo" />
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "CSVForm",
    methods: {
      testform: function (event) {

        // event.target

        /*console.log(event.target);

        let input = event.target.elements[0];
        let CSVFile = input.files[0];*/

        let form = new FormData();

        form.append('image', event.target.elements[0].files[0], event.target.elements[0].files[0].name);

        const config = {
          headers: { 'content-type': 'multipart/form-data' }
        };

        axios.post('http://localhost:3000/upload', form, config).then(res => console.log(res));
      }
    }
  }
</script>

<style scoped>

</style>
