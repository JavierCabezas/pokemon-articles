<template>
    <img :src="require(`../images/${imgName}`)" alt="" data-position="85% center"/>
</template>

<script>
    export default {
        props: ['imgName'],
    }
</script>
