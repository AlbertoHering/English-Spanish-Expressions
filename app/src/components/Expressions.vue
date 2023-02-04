<template>
    <div class="container">
        <h2>Phrases/Expressions</h2>
        <div v-for="item in expressions" :key="item.id">
            <span v-for="(e, i) in item.expression" :key="i">
                {{ e.expression }}
            </span>
            =>
            <span v-for="(e, i) in item.expressionEq" :key="'e'+i">
                {{ e.expression }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Expressions',
    props: ['expressions']
}
</script>