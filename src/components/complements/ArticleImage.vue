<template>
    <img :src="getImagePath()"
         :alt="alt"
         data-position="85% center"/>
</template>

<script>
    export default {
        props: ['imgName', 'alt'],
        methods: {
            getImagePath: function() {
                return require("@/images/" + this.imgName);
            },
        }
    }
</script>
