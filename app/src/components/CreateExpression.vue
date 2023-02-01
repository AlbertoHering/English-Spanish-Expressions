<template>
    <div class="container">
        <h2>Add Phrase/Expression</h2>
        <form class="mrgnbtm col-md-12">
            <div class="row padbttm">
                <div class="col-md-5">
                    <div class="row padbttm">
                        <label htmlFor="selectLang">Language</label>
                        <select class="form-control" name="selectLang" id="selectLang">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>
                    </div>
                    <div class="row">
                        <label htmlFor="inputExpression">Phrase/Expression</label>
                    </div>
                    <div class="row padbttm" v-for="(e, index) in expressions" :key="index">
                        <input :name="'expression_' + index" v-model="e.expression" placeholder="Phrase/Expression"
                            class="form-control flex" />
                        <button type="button" class="btn-link danger flex" @click="remove(false, index)"
                            v-show="index != 0">Remove</button>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-add flex" @click="addAnother(false)">Add
                            Another</button>
                    </div>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-5">
                    <div class="row padbttm">
                        <label htmlFor="inputPrefix">Prefix</label>
                        <input type="text" class="form-control" v-model="prefix" name="inputPrefix" id="inputPrefix"
                            placeholder="Prefix" />
                    </div>
                    <div class="row">
                        <label htmlFor="inputExpressionEq">Phrase/Expression</label>
                    </div>
                    <div class="row padbttm" v-for="(e, index) in expressionsEq" :key="index">
                        <input :name="'expression_' + index" v-model="e.expression" placeholder="Phrase/Expression"
                            class="form-control flex" />
                        <button type="button" class="btn-link danger flex" @click="remove(true, index)"
                            v-show="index != 0">Remove</button>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-primary btn-add flex" @click="addAnother(true)">Add
                            Another</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <button type="button" @click='createExpression()' class="btn btn-danger">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreateExpression',
    data() {
        return {
            prefix: '',
            expressions: [{
                expression: "",
            }],
            expressionsEq: [{
                expression: "",
            }],
        }
    },
    methods: {
        createExpression() {
            const payload = {
                expression: this.expressions,
                prefix: this.prefix,
                expressionEq: this.expressionsEq
            }
            this.$emit('createExpression', payload)
            this.clearForm();
        },
        clearForm() {
            this.expressions = this.expressions = [{
                expression: "",
            }],
                this.prefix = ""
        },
        addAnother(eq) {
            if (eq) {
                this.expressionsEq.push({
                    expression: "",
                })
            } else {
                this.expressions.push({
                    expression: "",
                })
            }
        },
        remove(eq, index) {
            if (eq) {
                this.expressionsEq.splice(index, 1);
            } else {
                this.expressions.splice(index, 1);
            }
        },
    }
}
</script>