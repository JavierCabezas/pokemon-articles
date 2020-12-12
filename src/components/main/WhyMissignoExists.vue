<template>
    <section id="main">
        <div class="inner">

            <header>
                <h1>Why MissingNo. clones the sixth item?</h1>
                <p class="info">December/2020 <a href="#">Javier Cabezas</a></p>
            </header>

            <p>My first article was about the
                <router-link :to="{ name: 'clone-sixth-item' }">effects of MissingNo. cloning the sixth item
                </router-link>
                , but...Why does MissingNo. appears in first instance? This is, in my opinion, one of the most
                interesting
                glitches to analyze and the reason of why I started messing up with the GameBoy memory.
            </p>

            <p>
                 <span class="image right">
                    <ArticleImage img-name="02_old_man.png" alt="Old man in Viridian City"/>
                </span>
                Lets start remembering how to trigger this bug: To force an encounter with MissingNo. the first step is
                to
                travel to Viridan City to talk with the old guy. He's the one that teaches you how to catch pokémon by
                using a weedle to do it. After this, you use fly to go to Cinnabar island and surf on the coast at the
                right. If you go up and down, without leaving the coast, eventually you will encounter MissingNo. You can
                also find a lot of (apparently) random pokémon at random levels, even over 100.
            </p>

            <ul class="actions">
                <li>
                    <router-link :to="{ name: 'home' }" class="button">Go back to Home</router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import ArticleImage from '../complements/ArticleImage'
    import PokemonSpriteImage from '../complements/PokemonSpriteImage'
    import Binary from '../complements/Binary'
    import Hex from '../complements/Hex'
    import Pow from '../complements/Pow'

    export default {
        name: 'WhyMissingoExists',
        components: {
            PokemonSpriteImage,
            ArticleImage,
            Binary,
            Hex,
            Pow
        }
    }
</script>