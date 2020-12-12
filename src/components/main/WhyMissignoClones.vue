<template>
    <section id="main">
        <div class="inner">

            <header>
                <h1>Why Missingno. clones the sixth item?</h1>
                <p class="info">December/2020 <a href="#">Javier Cabezas</a></p>
            </header>

            <p>
                In the first generation pokémon games Missingno. was a glitch pokémon that you could encounter and it
                was really well known by players because of one of the effect it causes: the duplication of the sixth item
                of the player's bag when encountering this 'pokémon'. This was a really easy method to get an infinite
                amount of rare items such as Master Balls, Rare Candies, TMs and Moon Stones. In this article I will
                explain why the item duplication glitch works.
            </p>

            <h2> Seen and captured bits </h2>

            <p>
                In order to understand the technical reason of the item duplication glitch the first step to understand
                how the game stores the pokémon pokédex data. Each pokémon on the list has two different boolean values
                related to their relationship with the player: one value for seen/unseen and another one for
                captured/not captured. This creates 3 different states: non seen and non captured, seen but not captured,
                captured and seen. The state "captured but not seen" its not possible to recreate in game (by legit means).
            </p>

            <div class="image fit">
                <ArticleImage alt="Pokédex" img-name="01_pokedex.png"/>
                <blockquote>
                    Pokédex screenshoot example. In this picture bulbasaur is seen, but not captured. Squirtle (the best
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
                <ArticleImage alt="Memory map for seen bits" img-name="01_ram_seen.png"/>
                <blockquote>
                    Seen bits. On the lower part of the picture the current value of <hex hex-value="40"/> is shown
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
            <p>So, this indicates that, between the eight, the only captured pokémon is squirtle. </p>

            <h4>"Captured" bit</h4>
            <p>
                The captured bit works in a similar fashion. At memory address <Hex hex-value="D30A"/> there are 8 bits
                representing the first 8 seen pokémon. In the case of my save file I have the value of
                <Hex hex-value="41"/> at that location.
            </p>

            <div class="image fit">
                <ArticleImage alt="Memory map for captured bits" img-name="01_ram_captured.png"/>
                <blockquote>
                    Captured bits. On the lower part of the picture the current value of <hex hex-value="41"/> is shown
                </blockquote>
            </div>

            <p>
                If we do the same analysis as before we can conclude that <hex hex-value="41"/> =
                <Binary binary-value="0100 0001"/>, indicating that I have seen both Bulbasaur and Squirtle (as previously
                shown on the pokédex image).
            </p>

            <h2> So what this has to do with Missingno.? </h2>

            <p>This may sound like it has nothing to do with Missingno., but they explain
                everything.
            </p>

            <p>
                The memory address destinated for "captured" pokémon goes from <Hex hex-value="D30A"/> to
                <Hex hex-value="D31C"/>. Next to that memory address is the section that stores the details of the items
                in the bag: what item do the player has in their bag and its quantity. Each of these pairs use 2 bytes
                each, totalling 4 bytes. This section goes from <Hex hex-value="D31D"/> to <Hex hex-value="D346"/>. As
                you can see they are right next to one another. See where I'm going with this?
            </p>

            <div class="image fit">
                <ArticleImage alt="Memory map for captured bits and items" img-name="01_ram_continous.png"/>
                <blockquote>
                    Underlined with red are the "captured" bits. With blue are the item bits.
                </blockquote>
            </div>

            <p>
                So now for the interesting part: each pokémon has a 'seen' bit according to their pokédex order, but,
                What about Missingno.? This is a pokémon that, in theory, should never been encountered by the player.
                Missingno. exists because, in order to store all of the 151 first generation pokémon, you need at least 8
                bits (if you have 7 bits you get a maximum amount of <Pow value="2" pow="7"/> = 128 pokémon and with
                8 bits you get <Pow value="2" pow="8"/> = 256 pokémon.
            </p>

            <p>
                So, by doing <Pow value="2" pow="8"/> - <Pow value="2" pow="7"/> = 105 avalible pokémon spaces without
                use. Missingno. Since Missingno.'s number goes beyond the 151 expected pokémons numbers,
                then its seen bit goes way beyond the expected value, getting into the bag bits. So, the reason of this
                glitch is <b>Missingno.'s seen bit corresponds to the first bit in the quantity of the sixth item in
                the bag</b>. So when you see Missingno. the game automatically adds 128 to the quantity of the item in
                the sixth location in the bag. Lets dive into details about this:
            </p>

            <h2> A practical example </h2>

            <p>
                I won't get into detail on how to encounter Missingno., I will assume that everyone that is interested in
                this article knows it. (But, if you don't, Glitchpedia does an amazing job in explaining it in
                <a href="https://errors.fandom.com/wiki/Missingno." target="_blank">This link</a>.
            </p>

            <p>
                I'll set up an example in where I will encounter Missingno. In the sixth location of my bag I have rare
                candies (of course I do).
            </p>

            <div class="image fit">
                <ArticleImage alt="Sitation before Missingno." img-name="01_bits_before_missingno.png"/>
                <blockquote>
                    Situation before Missingno. At the memory map the value of <Hex hex-value="2802"/> is underlined.
                    At the right two rare candies in the sixth location in my bag are shown.
                </blockquote>
            </div>

            <p>
                In the last picture the value of the value <Hex hex-value="2802"/>. <Hex hex-value="28"/>represents
                the index of item (rare candy) and <Hex hex-value="02"/> the quantity. Now, lets do a Missingno encounter
                and lets see what changes.
            </p>

            <div class="image fit">
                <ArticleImage alt="Sitation after MissingNo." img-name="01_bits_after_missingno.png"/>
                <blockquote>
                    Situation after Missingno. At the memory map the value of <Hex hex-value="2882"/> is underlined.
                    At the right a glitch character is shown on my rare candy quantity.
                </blockquote>
            </div>

            <p>
                The first value at the same memory map that we were examining changed from <Hex hex-value="2802"/> to
                <Hex hex-value="2882"/>. The first two hexadecimal digits are still <Hex hex-value="28"/>, meaning that
                we still have the item with index number 28 (that being rare candies). The second pair of hexadecimal
                values, as expected, changed. It went from <Hex hex-value="02"/> (<Binary binary-value="0000 0010"/>)
                to <Hex hex-value="82"/> (<Binary binary-value="1000 0010"/>). If we transform <Hex hex-value="82"/>.
            </p>

            <p>
                This means that <b>Missingno.'s seen bit is the first bit of the quantity of the sixth item in the bag</b>.
                So, If I force a new encounter with Missingno. the item quantity won't go up, because it will try to set
                in 1 the value that was already in 1. A quantity lower than <Binary binary-value="0111 1111"/> (127) is
                needed for the glitch to work.
            </p>

            <ul class="actions">
                <li><router-link :to="{ name: 'home' }" class="button">Go back to Home</router-link></li>
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
        name: 'WhyMissingnoClones',
        components: {
            PokemonSpriteImage,
            ArticleImage,
            Binary,
            Hex,
            Pow
        },
        data() {
            return {

            }
        }
    }
</script>