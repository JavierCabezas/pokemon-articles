<template>
    <i>{{addSpaces(val)}}<sub>16</sub></i>
</template>

<script>
    export default {
        props: ['val'],
        methods: {
            addSpaces: function (value) {
                return [...value].map((d, i) => (i) % 4 == 0 ? ' ' + d : d).join('').trim()
            }
        }
    }
</script>
