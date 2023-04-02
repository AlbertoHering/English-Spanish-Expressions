<template>
    <div class="container span">
        <div v-for="item in expressions" :key="item.id" class="row">
            <div class="col-md-6">
                <span v-for="(e, i) in item.expression" :key="i" :class="e.type" class="">
                    {{ e.expression }}
                </span>
            </div>
            <div class="col-md-6">
                <span v-for="(e, i) in item.expressionEq" :key="'e'+i" :class="e.type">
                    {{ e.expression }}
                </span>
            </div>
            <div class="edit">
                <button name="edit" type="button" class="btn btn-default btn-edit flex" @click="editExpressionTrigger(item)">Edit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Expressions',
    props: ['expressions'],
    methods: {
        editExpressionTrigger(item) {
            this.$parent.editExpressionTrigger(item)
        }
    }
}
</script>
<style>
.span {
    padding: 20px 0 0;
}
.span > div {
    margin: 0 0 10px 0px;
    border-bottom: solid #ced4da 2px;
}
.span span {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 1px 4px;
    margin: 0 4px 10px 0px;
    display: inline-block;
}
.span span.formal {
    background-color: #ced4da;
}

.btn-edit {
    background-color: #007bff;
    color: white;
    padding: 0 7px 2px;
    position: relative;
    border-radius: 5px 5px 0 0;
    font-size: 80%;
}
    .btn-edit:hover {
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
    }
.edit {
    text-align: right;
    width: 100%;
    margin-top: -18px;
    width: 100%;
}
</style>