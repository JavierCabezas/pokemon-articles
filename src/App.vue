<template>
    <div>
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import '@/assets/js/jquery.min.js';
    import '@/assets/js/jquery.scrolly.min.js';
    import '@/assets/js/util.js';
    import '@/assets/js/main.js';
    import '@/assets/css/main.css';

    import Footer from './components/Footer'
    import Header from './components/Header'

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
        }
    }
</script>