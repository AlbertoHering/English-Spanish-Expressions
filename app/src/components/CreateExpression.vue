<template>
    <form>
        <div class="row padbttm">
            <div class="col-md-5">
                <div class="row padbttm">
                    <label htmlFor="selectLang" class="inline">Language</label>
                    <b-form-select class="form-control col-md-3" name="selectLang" id="selectLang">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </b-form-select>
                </div>
                <div class="row">
                    <label htmlFor="inputExpression">Phrase/Expression</label>
                </div>
                <div class="row padbttm" v-for="(e, index) in expressions" :key="index">
                    <b-form-select :name="'type_' + index" v-model="e.type" class="form-control col-md-2">
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                    </b-form-select>
                    <b-form-input :name="'expression_' + index" v-model="e.expression" placeholder="Phrase/Expression"
                        class="form-control flex col-md-10" />
                    <button name="remove" type="button" class="btn-link danger flex" @click="remove(false, index)"
                        v-show="index != 0">X</button>
                </div>
                <div class="row">
                    <button name="add" type="button" class="btn btn-default btn-add flex" @click="addAnother(false)">+
                        Add Another</button>
                    </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <div class="row padbttm">
                    <label htmlFor="inputPrefix" class="inline">Prefix</label>
                    <b-form-input type="text" class="form-control col-md-6" v-model="prefix" name="inputPrefix" id="inputPrefix"
                        placeholder="Prefix" />
                </div>
                <div class="row">
                    <label htmlFor="inputExpressionEq">Phrase/Expression</label>
                </div>
                <div class="row padbttm" v-for="(e, index) in expressionsEq" :key="index">
                    <b-form-select :name="'type_' + index" v-model="e.type" class="form-control col-md-2">
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                    </b-form-select>
                    <b-form-input :name="'expression_' + index" v-model="e.expression" placeholder="Phrase/Expression"
                        class="form-control flex col-md-10" />
                    <button name="remove" type="button" class="btn-link danger flex" @click="remove(true, index)"
                        v-show="index != 0">X</button>
                </div>
                <div class="row">
                    <button name="add" type="button" class="btn btn-default btn-add flex" @click="addAnother(true)">+
                        Add
                        Another</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CreateExpression',
    data() {
        return {
            prefix: '',
            expressions: [{
                expression: "",
                type: "casual"
            }],
            expressionsEq: [{
                expression: "",
                type: "casual"
            }],
        }
    },
    methods: {
        createExpression(clearAndClose) {
            const payload = {
                expression: this.expressions,
                prefix: this.prefix,
                expressionEq: this.expressionsEq,
            }
            this.$emit('createExpression', payload)
            if (clearAndClose) {
                this.clearForm()
                this.$parent.show = false
            }
        },
        clearForm() {
            this.expressions = this.expressionsEq = [{
                expression: "",
                type: ""
            }],
            this.prefix = ""
        },
        addAnother(eq) {
            if (eq) {
                this.expressionsEq.push({
                    expression: "",
                    type: "casual"
                })
            } else {
                this.expressions.push({
                    expression: "",
                    type: "casual"
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
<style>
.mrgnbtm {
    margin-top: 20px;
}

.padbttm {
    padding-bottom: 20px;
}

.btn-link {
    padding: 0 0 0 1%;
    color: blue;
    border: none;
    background-color: transparent;
    font-size: 80%;
}

.btn-add {
    background-color: #007bff;
    color: white;
    padding: 0 7px 2px;
    position: relative;
    border-radius: 0 0 5px 5px;
    font-size: 80%;
    top: -20px;
}

.btn-link.danger {
    background-color: #dc3545;
    color: white;
    position: absolute;
    right: 1px;
    padding: 7px 4px;
    border-radius: 0 5px 5px 0;
    border-left: 1px solid #ced4da;
}
.type-radio {
    position: absolute;
    left: 160px;
    margin: -30px 0;
}
label.inline {
    line-height: 2.2em;
}
label {
    margin-right: 10px;
}
</style>