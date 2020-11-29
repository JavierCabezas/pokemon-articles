<template>
    <div>
        <article class="post style1" v-for="article in articles" :id="article.id">
            <div class="image">
                <ArticlePreviewImg :imgName="article.imgName"> </ArticlePreviewImg>
            </div>
            <div class="content">
                <div class="inner">
                    <header>
                        <h2><a href="articles/01_sixth_item.html"> {{article.title}} </a></h2>
                        <p class="info">{{article.date}} <a href="#">Javier Cabezas</a></p>
                    </header>
                    <p>{{article.intro}}</p>
                    <ul class="actions">
                        <li><a href="articles/01_sixth_item.html" class="button alt">Read More</a></li>
                    </ul>
                </div>
            </div>
            <ArticleNav></ArticleNav>
        </article>
    </div>
</template>

<script>
    import ArticleNav from './ArticleNav'
    import ArticlePreviewImg from './ArticlePreviewImg'

    export default {
        name: 'AppPreviewList',
        components: {
            ArticleNav,
            ArticlePreviewImg
        },
        data() {
            return {
                articles: [
                    {
                        'id': 'one',
                        'imgName': 'missigno_encounter.png',
                        'title': 'Why MissingNo. clones the sixth item?',
                        'date': 'December/2020',
                        'intro': 'One of the most well-known MissingNo. characteristics was the capability to clone the sixth item\n' +
                            'in the players bag. The goal of this article is to know why this glitch works.'
                    }
                ]
            }
        }
    }
</script>