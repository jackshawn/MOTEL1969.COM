<template>
    <div class="movie-wrap">
        <div class="movie-poster">
            <img :src="video.cover" alt="">
            <Icon icon="play" class="play" onclick="window.open('https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200f960000beub2ikm7fibf5skhf90&line=0')"></Icon>
        </div>

        <div class="movie-detail">
            <div class="detail-name">
                <span @click="toggle(num)" class="one-name" :class="index == num ? 'active' : ''" v-for="(i, num) in video.movie">
                    {{i.name}} <span>{{i.point}}</span>

                    <span class="line-arrow"></span>
                </span>
            </div>
            <div class="detail-line"></div>
            <div class="detail-media">
                <div class="one-media" :class="index == num ? 'active' : ''" v-for="(i, num) in video.movie">
                    <div class="media-video">
                        <Icon icon="movie"></Icon> :
                        <a :href="item.link" target="_blank" v-for="item in i.video">
                            <Icon :icon="item.icon"></Icon>
                        </a>
                    </div>
                    <div class="media-music">
                        <Icon icon="music"></Icon> :
                        <a :href="item.link" target="_blank" v-for="item in video.music">
                            <Icon :icon="item.icon"></Icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon.vue'

    export default {
        name: 'movie',
        components: {
            Icon
        },
        props: {
            video: Object
        },
        data() {
            return {
                index: 0
            }
        },
        methods: {
            toggle(n) {
                this.index = n;

            }
        }
    }
</script>
<style scoped lang="scss">
    $video-width: 360px;

    .movie-wrap {
        width: $video-width;
        background: #fff;

        overflow: hidden;
        margin: 10px;


        .movie-poster {
            width: $video-width;
            position: relative;

            img {
                width: $video-width;
            }

            .play {
                width: 40px;
                height: 40px;
                color: #fff;
                cursor: pointer;

                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -20px;
                margin-left: -20px;
            }
        }



        .movie-detail {
            width: $video-width -20;
            /*height: 160px;*/
            padding: 10px;


            .detail-name {
                font-size: 14px;

                .one-name {
                    display: inline-block;
                    position: relative;
                    margin-right: 15px;
                    cursor: pointer;

                    .line-arrow {
                        display: none; // 不显示

                        width: 5px;
                        height: 5px;
                        background: #fff;

                        border: 1px solid transparent;
                        border-top-color: #666;
                        border-right-color: #666;

                        transform: rotate(-45deg);

                        position: absolute;

                        bottom: -14px;
                        left: 50%;
                        margin-left: -3px;
                    }

                    &.active {
                        font-weight: bold;

                        .line-arrow {
                            display: block;
                        }
                    }

                }
            }

            .detail-line {
                height: 0;
                margin: 10px 0;
                border-bottom: 1px solid #666;



            }

            .detail-media {

                .one-media {
                    display: none;

                    &.active {
                        display: block;
                    }

                    a {
                        color: inherit;
                        display: inline-block;
                        margin-right: 5px;
                        margin-left: 10px;
                    }

                    .media-video {
                        margin-bottom: 15px;
                    }

                    .media-music {
                        margin-bottom: 5px;
                    }
                }



            }
        }
    }
</style>
