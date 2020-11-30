<template>
    <div>
        <article class="post style1" v-for="article in articles" :id="article.id">
            <div class="image">
                <ArticleImage :imgName="article.imgName" :alt="article.imgAlt"></ArticleImage>
            </div>
            <div class="content">
                <div class="inner">
                    <header>
                        <h2>
                            <router-link :to="{ name: article.route }"> {{article.title}}</router-link>
                        </h2>
                        <p class="info">{{article.date}} <a href="#">Javier Cabezas</a></p>
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
    import ArticleImage from "./complements/ArticleImage"

    export default {
        name: "AppPreviewList",
        components: {
            ArticleNav,
            ArticleImage
        },
        data() {
            return {
                articles: [
                    {
                        "id": "one",
                        "imgName": "missigno_encounter.png",
                        "imgAlt": "MissingNo. Encounter",
                        "title": "Why MissingNo. clones the sixth item?",
                        "date": "December/2020",
                        "route": "missigno-sixth-item",
                        "intro": "One of the most well-known MissingNo. characteristics was the capability to " +
                            "clone the sixth item in the players bag. The goal of this article is to know " +
                            "why this glitch works."
                    }
                ]
            }
        }
    }
</script>