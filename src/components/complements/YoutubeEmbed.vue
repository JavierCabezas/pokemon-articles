<template>
    <div class="box alt">
        <div class="row 50% uniform">
            <div class="12u$ video-container">
                <iframe :src="videoSource()"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            </div>
        </div>
        <p>
            {{description}} <br>
            - This video was uploaded to YouTube by <a :href="linkToUserChannel()" target="_blank">{{uploaderName}} </a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "YoutubeEmbed",
        props: ['uploaderChannel', 'videoId', 'uploaderName', 'description'],
        methods: {
            linkToUserChannel: function () {
                return "https://www.youtube.com/channel/" + this.uploaderChannel;
            },
            videoSource: function () {
                return "https://www.youtube.com/embed/" + this.videoId;
            }
        },
        data() {
        }
    }
</script>

<style>
    .video-container {
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .video-container::after {
        padding-top: 56.25%;
        display: block;
        content: '';
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>