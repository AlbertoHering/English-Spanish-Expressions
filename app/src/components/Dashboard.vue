<template>
  <div class="hello">
    <h1>English-Spanish Expressions and Phrases</h1>
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-12">
            <CreateExpression @createExpression="expressionCreate($event)" />
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
        <Expressions v-if="expressions.length > 0" :expressions="expressions" />
    </div>
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
      createExpression(data).then(() => this.getAllExpressions() )
    }
  },
  mounted () {
    this.getAllExpressions();
  }
}
</script>