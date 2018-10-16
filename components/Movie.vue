<template>
    <div class="movie-wrap">
        <div class="movie-poster" :style="{backgroundImage: `url(${video.cover})`}">
            <!--<img :src="video.cover" alt="">-->
            <div class="play" @click="jump">
                <Icon icon="play"></Icon>
            </div>
        </div>

        <div class="movie-detail">
            <div class="detail-name">
                <div @click="toggle(num)" class="one-name" :class="index == num ? 'active' : ''" v-for="(i, num) in video.movie">{{i.name}} <span class="movie-point">{{i.point}}</span>
                    <span class="line-arrow"></span>
                </div>
            </div>
            <div class="detail-line"></div>
            <div class="detail-media">
                <div class="one-media" :class="index == num ? 'active' : ''" v-for="(i, num) in video.movie">
                    <div class="media-video">
                        <Icon icon="movie"></Icon> :
                        <a v-if="i.video.length > 0" :href="item.link" target="_blank" v-for="item in i.video">
                            <Icon :icon="item.icon"></Icon>
                        </a>
                        <span v-if="i.video.length == 0" class="yet">整理中...</span>
                    </div>
                    <div class="media-music">
                        <Icon icon="music"></Icon> :
                        <a v-if="video.music.length > 0" :href="item.link" target="_blank" v-for="item in video.music">
                            <Icon :icon="item.icon"></Icon>
                        </a>
                        <span v-if="video.music.length == 0" class="yet">整理中...</span>
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

            },
            jump() {
                let _this = this;
                window.open('javascript:window.name;', '<script>location.replace("' + _this.video.douyin + '")<\/script>'); // 不带referer跳转
            }
        }
    }
</script>
<style scoped lang="scss">
    $video-width: 360px;
    $line-color: #999;

    .movie-wrap {
        width: $video-width;
        background: #fff;

        overflow: hidden;
        margin: 10px;
        box-shadow: 1px 1px 3px #ccc;



        .movie-poster {
            width: $video-width;
            height: 202px;
            background-size: cover;
            background-position: center;

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

                &>svg {
                    width: 40px;
                    height: 40px;
                }
            }
        }



        .movie-detail {
            width: $video-width -20;
            /*height: 160px;*/
            padding: 10px;


            .detail-name {
                font-size: 15px;

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
                        border-top-color: $line-color;
                        border-right-color: $line-color;

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

                    .movie-point {color: #f44336}

                }
            }

            .detail-line {
                height: 0;
                margin: 10px 0;
                border-bottom: 1px solid $line-color;



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

                    .yet {
                        font-size: 14px;
                        margin-left: 10px;
                    }
                }



            }
        }
    }
</style>
