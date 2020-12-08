<template>
    <section id="main">
        <div class="inner">

            <header>
                <h1>About the author</h1>
                <p class="info">December/2020 <a href="#">Javier Cabezas</a></p>
            </header>

            <p>
                <span class="image right">
                    <ArticleImage img-name="me.png" alt="Javier Cabezas"/>
                </span>
                My name is Javier and I'm a software developer currently living in Santiago, Chile with my significant
                other and a (the cutest) puppy. I've been developing software for a while now, starting on 2013 and
                haven't stopped since. I also don't plan to do it anytime soon :). This is something that I really enjoy
                and I work mostly as a backend developer, with PHP and Python being my main languages, but I also know a
                little of front-end. Actually, this website has no backend whatsoever, being developed in HTML with
                VueJS v2. The source code is public on GitHub (Now, I don' see why anyone would want to see it).
            </p>

            <p>
                Now, Being born on 1988, I lived the pokémania at its peak. Its crazy to remember how much Pokémon was
                part of the daily conversation between my friends and schoolmates. We discussed the anime, played the
                Trading Card Game and, in school-breaks, it was really common for people to play with pokémon pogs (we
                had pokémon pogs back in the day in Chile). I even collected some pokémon stickers that came with a
                bubble gum brand...and I didn't even like bubble gum!
            </p>

            <p>
                <span class="image left">
                    <ArticleImage img-name="splash_screen_first_gen.png" alt="First generation pokemon games"/>
                </span>
                But, the most important part of all of this were the games: pokémon red and blue and, after that,
                pokémon gold and silver. It was common to hear crazy rumors about the first generation pokémon games.
                Just from memory I remember that mew was under the S.S. Anne truck, the pokégods, pikablue, among
                others.
                And, since the internet was not as advanced and massive as it is today, you ended up believing some of
                them.
            </p>

            <p>
                Now, going some years in the future, when I started learning computer science at college, pokémon also
                played an important part. I remember learning coding by doing software to organize pokémon tournaments
                and used pokémon in more than one college evaluation. Then I got interested in trying to <i>really</i>
                understand how the game worked. These were such an important part of my childhood (and I still don't
                get over them, to be honest) that I felt like I needed to know.
            </p>

            <p>
                That's why I decided to write this small blog. I loved this research and wanted to share it with the
                world.
            </p>

            <p>
                If anyone wants to contact me for any reason, feel free to hit me up with an email to
                jcleyton[at]gmail.com.
            </p>

            <ul class="actions">
                <li><router-link :to="{ name: 'home' }" class="button">Go back to Home</router-link></li>
            </ul>

        </div>
    </section>
</template>

<script>
    import ArticleImage from '../complements/ArticleImage'

    export default {
        name: 'AboutMe',
        components: {
            ArticleImage,
        }
    }
</script>