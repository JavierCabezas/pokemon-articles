<template>
    <img :src="require(`../../images/${imgName}`)"
         :alt="alt"
         data-position="85% center"/>
</template>

<script>
    export default {
        props: ['imgName', 'alt'],
    }
</script>
