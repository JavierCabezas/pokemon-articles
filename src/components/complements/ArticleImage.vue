<template>
    <img :src="getImagePath()"
         :alt="alt"
         :width="getImgWidth()"
         :data-position="getDataPosition() + '% center'"/>
</template>

<script>
    export default {
        props: ['imgName', 'alt', 'dataPosition', 'width'],
        methods: {
            getImagePath: function() {
                return require("@/images/" + this.imgName);
            },
            getDataPosition: function() {
                return this.dataPosition || 85;
            },
            getImgWidth: function() {
                return this.width || "";
            }
        }
    }
</script>
