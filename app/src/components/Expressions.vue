<template>
    <div class="container">
        <h2>Phrases/Expressions</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Expression Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in expressions" :key="item.id">
                  <td>{{ item }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Expressions',
        props: ['expressions']
     }
</script>