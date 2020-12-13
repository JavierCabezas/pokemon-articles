<template>
    <section id="main">
        <div class="inner">

            <header>
                <h1>Why MissingNo. exists?</h1>
                <p class="info">December/2020 <a href="#">Javier Cabezas</a></p>
            </header>

            <p>
                <span class="image right">
                    <ArticleImage img-name="02_old_man.png" alt="Old man in Viridian City"/>
                </span>

                MissingNo. is, in my opinion, one of the most interesting glitches to analyze and the reason of why
                I started messing up with the GameBoy memory.
            </p>

            <p>
                Lets start remembering how to trigger this bug: To force an encounter with MissingNo. the first step is
                to
                travel to Viridan City to talk with the old guy. He's the one that teaches you how to catch pokémon by
                using a weedle to do it. After this, you use fly to go to Cinnabar island and surf on the coast at the
                right. You must be careful to just surf in the coastline, without getting any farther away in the sea.
                If you go up and down, without leaving the coast, eventually you will encounter MissingNo. You can
                also find a lot of (apparently) random pokémon at random levels, normally over 100.
            </p>


            <p>
                <YoutubeEmbed uploader-channel="UCSdMyehT0CHbukOD-GsOEjQ"
                              uploader-name="Raichuu26"
                              video-id="giR3NFtAfJg"
                              description="MissigNo. encounter and some of its effects. Shows the complete process
                                from talking with the old man to some of the glitches. In this run a level 80 golduck
                                appears among the 'random' pokémon along with MissingNo."
                />
            </p>

            <p>
                So, why does this happens? Well, in short, this bug is caused by the GameBoy memory limitations.
                Let's get into that:
            </p>

            <h3>Why the old man?</h3>
            <p>
                <span class="image right">
                    <ArticleImage img-name="02_old_man_pokeball.png" alt="Old man throwing a pokéball"/>
                </span>
                In order for the game to display the old man weedle catching tutorial your name is temporally changed
                to OLD MAN. The sprite shown is actually your own! So, your name must be stored somewhere else so the
                game can replace it later.
            </p>

            <h3>Wild pokémon memory areas</h3>
            <p>
                There is an area in the memory that stores the wild pokémon for the area and their levels. This area is
                overwritten each time that you enter any area in where wild pokémon can be found. Since, supposedly,
                you are not going to encounter any wild pokémon while looking at the catching tutorial the programmers
                decided to, temporally, store your name in here.
            </p>

            <p>
                When you fly south to Cinnabar Island you, in theory, should not be able to find wild pokémon. The
                problem is that...you actually can! The coastline at the right of the island wild pokémon can be found,
                but the wild pokémon memory area is not updated because its categorized as part of the island.
            </p>

            <p>
                So when you surf up and down, without leaving Cinnabar, <b>the data of the wild pokémon that you
                encounter is determined by your name</b>.
            </p>

            <h3>How the random pokémon data is stored</h3>

            <p>
                So, in the memory map from
                <Hex hex-value="D888"/>
                to
                <Hex hex-value="D89B"/>
                there are multiple
                pair of bytes in the format of pokemon_level:pokemon_index. Both the pokémon level and pokémon index
                are a byte. A good list of indexes can be found in <a :href="link_bulbapedia">bulbapedia</a>.
            </p>

            <p>
                So, if, for example, we are in a fictional area in the game in where level 15 grimers (index
                <Hex hex-value="0D"/>) and level 20 dratinis (index <Hex hex-value="58"/>) can be found the value would be:
            </p>

            <div class="table-wrapper">
                <table class="alt">
                    <tbody>
                    <tr>
                        <td><b>In game</b></td>
                        <td>Level 15</td>
                        <td> <PokemonSpriteImage generation="1" :pokemon-number="88"/> </td>
                        <td>Level 20</td>
                        <td> <PokemonSpriteImage generation="1" :pokemon-number="147"/></td>
                    </tr>
                    <tr>
                        <td><b>In memory</b></td>
                        <td><Hex hex-value="0F"/></td>
                        <td><Hex hex-value="0D"/></td>
                        <td><Hex hex-value="14"/></td>
                        <td><Hex hex-value="58"/></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <h3>A practical example</h3>

            <p>To prove this, by example, I chose 4 random first generation pokémon and their level (from 1 to 255).</p>
            <div class="table-wrapper">
                <table class="alt">
                    <tbody>
                    <tr>
                        <td><b>Level</b></td>
                        <td>102</td>
                        <td>137</td>
                        <td>56</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td><b>Pokémon</b></td>
                        <td>
                            <PokemonSpriteImage generation="1" :pokemon-number="29"/>
                        </td>
                        <td>
                            <PokemonSpriteImage generation="1" :pokemon-number="36"/>
                        </td>
                        <td>
                            <PokemonSpriteImage generation="1" :pokemon-number="58"/>
                        </td>
                        <td>
                            <PokemonSpriteImage generation="1" :pokemon-number="45"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <p>So our players name should be...</p>
            <div class="table-wrapper">
                <table class="alt">
                    <tbody>
                    <tr>
                        <td><b>In game</b></td>
                        <td>Level 102</td>
                        <td> <PokemonSpriteImage generation="1" :pokemon-number="29"/> </td>
                        <td>Level 137</td>
                        <td> <PokemonSpriteImage generation="1" :pokemon-number="36"/></td>
                        <td>Level 56</td>
                        <td> <PokemonSpriteImage generation="1" :pokemon-number="58"/></td>
                        <td>Level 80</td>
                        <td> <PokemonSpriteImage generation="1" :pokemon-number="45"/></td>
                    </tr>
                    <tr>
                        <td><b>In memory</b></td>
                        <td><Hex hex-value="66"/></td> <!-- lv 102 -->
                        <td><Hex hex-value="0F"/></td> <!-- nidoran f -->
                        <td><Hex hex-value="89"/></td> <!-- lv 137 -->
                        <td><Hex hex-value="8E"/></td> <!-- clefable -->
                        <td><Hex hex-value="38"/></td> <!-- lv 56 -->
                        <td><Hex hex-value="21"/></td> <!-- growlite -->
                        <td><Hex hex-value="50"/></td> <!-- lv 80 -->
                        <td><Hex hex-value="BB"/></td> <!-- vileplume -->
                    </tr>
                    </tbody>
                </table>
            </div>

            <p>
                <span class="image left">
                    <ArticleImage img-name="02_old_man.png" alt="Old man in Viridian City"/>
                </span>
                So I placed <Hex hex-value="660F898E382150BB"/> at the players name section.
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
    import YoutubeEmbed from '../complements/YoutubeEmbed'
    import Binary from '../complements/Binary'
    import Hex from '../complements/Hex'
    import Pow from '../complements/Pow'

    export default {
        name: 'WhyMissingoExists',
        components: {
            PokemonSpriteImage,
            ArticleImage,
            YoutubeEmbed,
            Binary,
            Hex,
            Pow
        },
        data() {
            return {
                'link_bulbapedia': 'https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_index_number_(Generation_I)'
            }
        }
    }
</script>