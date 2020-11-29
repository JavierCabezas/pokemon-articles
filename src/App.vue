<template>
    <div>
        <!-- Header -->
        <header id="header">
            <a href="index.html" class="logo"><strong>Binary</strong> by TEMPLATED</a>
        </header>

        <Banner/>

        <!-- One -->
        <ArticlePreviewList/>

        <Footer/>
    </div>
</template>

<script>
    import '@/assets/js/jquery.min.js';
    import '@/assets/js/jquery.scrolly.min.js';
    import '@/assets/js/util.js';
    import '@/assets/js/main.js';
    import '@/assets/css/main.css';

    import ArticlePreviewList from './components/ArticlePreviewList'
    import Footer from './components/Footer'
    import Banner from './components/Banner'

    export default {
        name: 'App',
        data() {
            return {
                showArticle: false,
            }
        },
        components: {
            ArticlePreviewList,
            Footer,
            Banner,
        }
    }
</script>