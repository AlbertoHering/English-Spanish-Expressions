<template>
  <div class="hello">
    <h1>English-Spanish Phrases and Expressions</h1>
    <div class="container text-center">
      <button name="close" class="btn btn-primary" @click="action(true)">Add Phrase/Expression</button>
    </div>
    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                <h2>Add Phrase/Expression</h2>
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                <CreateExpression ref="expression" @createExpression="expressionCreate($event)" />
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="btn btn-danger" @click="action(false)">Close</button>
                <button type="button" @click='createExpression(false)' class="btn btn-primary">Create</button>
                <button type="button" @click='createExpression(true)' class="btn btn-primary">Create and Close</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <Expressions v-if="expressions.length > 0" :expressions="expressions" />
  </div>
</template>

<script>
import CreateExpression from './CreateExpression.vue'
import Expressions from './Expressions.vue'
import { getAllExpressions, createExpression } from '../services/ExpressionService'

export default {
  name: 'Dashboard',
  components: {
    CreateExpression,
    Expressions
  },
  data() {
    return {
      show: false,
      expressions: []
    }
  },
  methods: {
    getAllExpressions() {
      getAllExpressions().then(response => {
        this.expressions = response
      })
    },
    expressionCreate(data) {
      createExpression(data).then(() => this.getAllExpressions())
    },
    action(open) {
      this.show = open
    },
    createExpression(clearAndClose) {
      this.$refs.expression.createExpression(clearAndClose)
    }
  },
  mounted() {
    this.getAllExpressions();
  }
}
</script>
<style>
.modal-mask {
  width: 90vw;
  height: 90vh;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 96vw;
  height: 92vh;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>