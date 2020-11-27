<template>
    <!-- Header -->
    <header id="header">
        <a href="index.html" class="logo"><strong>Binary</strong> by TEMPLATED</a>
        <nav>
            <a href="#menu">Menu</a>
        </nav>
    </header>

    <!-- Nav -->
    <nav id="menu">
        <ul class="links">
            <li><a href="index.html">Home</a></li>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>
        </ul>
    </nav>

    <!-- Banner -->
    <section id="banner">
        <div class="inner">
            <h1>My nerdy pokémon articles</h1>
            <p>
                My name is Javier and I'm a software engineer. Since I was (and currently still am, to be honest)
                a huge nerd and lived as a kid in the 90s it's quite expected for me to get interested in pokémon,
                specially red and blue.
            </p>
            <p>
                These games have a huge place in my heart. I loved the rumors and glitches around those games.
                They were kind of magical in their own way, specially Missigno. So, when I grew up, I decided to
                try to understand the mechanics of that what made my childhood so special.
            </p>
            <p>
                So my intention in this little webpage is to share a little knowledge that I researched a couple
                of years ago, while I was studying computer science at college.
            </p>
            <ul class="actions">
                <li><a href="#one" class="button alt scrolly big">Continue</a></li>
            </ul>
        </div>
    </section>

    <!-- One -->
    <article id="one" class="post style1">
        <div class="image">
            <img src="/src/images/missigno_encounter.png" alt="" data-position="85% center"/>
        </div>
        <div class="content">
            <div class="inner">
                <header>
                    <h2><a href="articles/01_sixth_item.html">Why MissingNo. clones the sixth item?</a></h2>
                    <p class="info">November/2020 <a href="#">Javier Cabezas</a></p>
                </header>
                <p>One of the most well-known MissingNo. characteristics was the capability to clone the sixth item
                    in the players bag. The goal of this article is to know why this glitch works.</p>
                <ul class="actions">
                    <li><a href="articles/01_sixth_item.html" class="button alt">Read More</a></li>
                </ul>
            </div>
            <div class="postnav">
                <a href="#" class="prev disabled"><span class="icon fa-chevron-up"></span></a>
                <a href="#two" class="scrolly next"><span class="icon fa-chevron-down"></span></a>
            </div>
        </div>
    </article>

    <!-- Footer -->
    <footer id="footer">
        <ul class="icons">
            <li><a href="https://github.com/JavierCabezas" class="icon fa-github"><span class="label">GitHub</span></a>
            </li>
            <li><a href="https://www.linkedin.com/in/javier-cabezas-a1bb6a116/" class="icon fa-linkedin"><span
                    class="label">LinkedIn</span></a></li>
            <li><a href="mailto:jcleyton@gmail.com" class="icon fa-envelope"><span class="label">E-mail</span></a></li>


        </ul>
        <div class="copyright">
            &copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a
                href="https://unsplash.com">Unsplash</a>.
        </div>
    </footer>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        }
    }
</script>
