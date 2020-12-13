<template>
    <ArticleImage :img-name="getSpritePath()" :alt="pokemonList[pokemonNumber]"></ArticleImage>
</template>


<script>
    import ArticleImage from '../complements/ArticleImage'

    export default {
        name: 'PokemonSpriteImage',
        components: {
            ArticleImage,
        },
        methods: {
            getSpritePath: function () {
                let generationSting = 'rb';
                let pokemonName = this.pokemonList[this.$props.pokemonNumber];
                return 'sprites/' + generationSting + '_' + pokemonName + '.png';
            }
        },
        props: ['generation', 'pokemonNumber'],
        data() {
            return {
                pokemonList: {
                    1: 'bulbasaur',
                    2: 'ivysaur',
                    3: 'venusaur',
                    4: 'charmander',
                    5: 'charmeleon',
                    6: 'charizard',
                    7: 'squirtle',
                    8: 'wartortle',
                    29: 'nidoranf',
                    36: 'clefable',
                    45: 'vileplume',
                    58: 'growlithe',
                    88: 'grimer',
                    147: 'dratini'
                }
            }
        }
    }
</script>