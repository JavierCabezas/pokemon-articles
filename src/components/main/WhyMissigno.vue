<template>
    <section id="main">
        <div class="inner">

            <header>
                <h1>Why Missigno. clones the sixth item?</h1>
                <p class="info">December/2020 <a href="#">Javier Cabezas</a></p>
            </header>

            <p>
                One of the most well-known effects of encountering Missigno. is the duplication of the sixth item
                of the player's bag. This was a really easy method to get an infinite amount of rare items such
                as Master Balls, Rare Candies, TMs and Moon Stones.
            </p>

            <p>
                To understand the technical reason of the item duplication the first step is to learn about how
                the game stores the pokémon pokédex data. Each pokémon on the list has two different boolean values
                related to their relationship with the player: one value for seen/unseen and another one for
                captured/not captured. This creates 3 different states: non seen and non captured, seen but not captured,
                captured and seen. The state "captured but not seen" its not possible to recreate in game.
            </p>
            <div class="image fit">
                <ArticleImage alt="Pokédex" img-name="01_pokedex.png"/>
                <blockquote>
                    Pokédex example. In this picture bulbasaur is seen, but not captured. Squirtle (the best
                    starter) is both captured and seen. Ivysaur, venusaur, charmander, etc. are neither seen or
                    captured.
                </blockquote>
            </div>

            <h4>"Seen" bit</h4>
            <p>
                So, if we go to the memory address <Hex hex-value="D2F7"/> you can find a byte that determine
                the seen bit for the 8 first pokémon (from bulbasaur to wartortle). In the case of my game, the
                current value in this memory address is <Hex hex-value="40"/>.
            </p>
            <div class="image fit">
                <ArticleImage alt="Memory map" img-name="01_ram_01.png"/>
                <blockquote>
                    Selected on the lower part of the picture the current value of <hex hex-value="40"/> is shown
                </blockquote>
            </div>
            <p>
                How can that be translated into the picture of the pokédex shown? If we transform the 40 from
                hexadecimal to binary we get <Hex hex-value="40"/> = <Binary binary-value="0100 0000"/>.
            </p>
            <p>
                Since the game-boy works with little endian (basically, by reading the memory in reverse) this
                <i>seen bits</i> are translated like this table:
            </p>
            <div class="table-wrapper">
                <table class="alt">
                    <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td v-for="pokeNumber in 8">
                            <PokemonSpriteImage generation="1" :pokemon-number="pokeNumber"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p>So, </p>
        </div>
    </section>
</template>

<script>
    import ArticleImage from '../complements/ArticleImage'
    import PokemonSpriteImage from '../complements/PokemonSpriteImage'
    import Binary from '../complements/Binary'
    import Hex from '../complements/Hex'

    export default {
        name: 'WhyMissigno',
        components: {
            PokemonSpriteImage,
            ArticleImage,
            Binary,
            Hex
        },
        data() {
            return {

            }
        }
    }
</script>