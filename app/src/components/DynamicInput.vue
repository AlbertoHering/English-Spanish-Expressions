<template>
  <div>
    <div v-for="(inputField, index) in inputFields" :key="index" class="padbttm">
      <input v-model="inputField.inputFieldName" placeholder="Phrase/Expression" class="form-control flex" />
      <button type="button" class="btn btn-danger flex md-4" @click="remove(index)" v-show="index != 0">Remove</button>
    </div>
    <button type="button" class="btn btn-primary flex md-2" @click="addMore()">Add More</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      inputFields: [
        {
          inputFieldName: "",
        },
      ],
    };
  },
  methods: {
    addMore() {
      this.inputFields.push({
        inputFieldName: "",
      });
    },
    remove(index) {
      this.inputFields.splice(index, 1);
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>