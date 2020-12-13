<template>
    <div>
        <article v-for="article in articles"
                 class="post invert style4"
                 :class="article.number%2===0?'alt':''"
                 :id="article.id"
        >
            <div class="image">
                <img :src="imgSource(article.imgName)"
                     :alt="article.imgAlt"
                />
            </div>
            <div class="content">
                <div class="inner">
                    <header>
                        <h2>
                            <router-link :to="{ name: article.route }"> {{article.title}}</router-link>
                        </h2>
                        <p class="info">{{article.date}}
                            <router-link :to="{ name: 'about-me'}">Javier Cabezas</router-link>
                        </p>
                    </header>
                    <p>{{article.intro}}</p>
                    <ul class="actions">
                        <li>
                            <router-link :to="{ name: article.route }" class="button alt"> Read More</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <ArticleNav></ArticleNav>
        </article>
    </div>
</template>

<script>
    import ArticleNav from "./ArticleNav"
    import ArticleImage from "../complements/ArticleImage"

    export default {
        name: "AppPreviewList",
        components: {
            ArticleNav
        },
        methods: {
            imgSource: function(imgName) {
                return require("@/images/" + imgName);
            }
        },
        data() {
            return {
                articles: [
                    {
                        "id": "one",
                        "number": 1,
                        "imgName": "missigno_encounter.png",
                        "imgAlt": "MissingNo. Encounter",
                        "title": "Why is MissingNo. encountered?",
                        "date": "December/2020",
                        "route": "why-missigno-exists",
                        "intro": "One of the most well-known first generation pokémon games glitches is MissingNo." +
                            "It is known for things like having the 'bird' (not flying) type, glitching your hall " +
                            "of fame, cloning your items, among others. This article goes into detail of why this " +
                            "pokémon exists and why its accompanied with random (glitch or regular) pokémon."
                    },
                    {
                        "id": "two",
                        "number": 2,
                        "imgName": "sixth_item_clone.png",
                        "imgAlt": "Sixth item clone",
                        "title": "Why MissingNo. clones the sixth item?",
                        "date": "December/2020",
                        "route": "clone-sixth-item",
                        "intro": "One of the most well-known MissingNo. characteristics was the capability to " +
                            "clone the sixth item in the players bag. The goal of this article is to know " +
                            "why this glitch works."
                    }
                ]
            }
        }
    }
</script>