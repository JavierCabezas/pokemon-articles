<template>
    <div>
        <Banner/>
        <ArticlePreviewList/>
    </div>
</template>

<script>
    import Banner from '../Banner'
    import ArticlePreviewList from '../ArticlePreviewList'

    export default {
        name: 'App',
        components: {
            ArticlePreviewList,
            Banner,
        }
    }
</script>