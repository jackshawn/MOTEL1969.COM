<template>
    <div class="home">
        <Movie v-for="i in videos" :video="i"></Movie>
        <div class="empty"></div>
        <!--<div class="btn-more">-->
        <!--{{{normal: '更 多', done: '没有了', fetching: '正在获取...'}[btnState]}}-->
        <!--</div>-->
    </div>
</template>

<script>
    import Movie from '~/components/Movie.vue'
    import m from '~/assets/data'

    export default {
        name: 'home',
        components: {
            Movie
        },
        data() {
            return {
                btnState: 'normal', // normal done fetching
                index: 0,
                videos: m
            }
        },
        methods: {
            fecth() {

            }
        }
    }
</script>
<style scoped lang="scss">
    .home {
        display: flex;
        max-width: 800px;
        margin: 0 auto;

        flex-wrap: wrap;

        justify-content: center;
        align-items: center;

        .empty {
            width: 360px;
            margin: 10px;
        }
    }

    .btn-more {
        width: 200px;
        margin: 0 auto;
        line-height: 2em;
        text-align: center;
        border: 1px solid #ccc;
        cursor: pointer;
    }
</style>
