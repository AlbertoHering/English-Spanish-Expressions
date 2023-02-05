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
        </div>
    </div>
</template>

<script>
export default {
    name: 'Expressions',
    props: ['expressions']
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
</style>