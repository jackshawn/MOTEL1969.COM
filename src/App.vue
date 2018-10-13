<template>
    <div id="app">
        <div class="header">
            <img src="./assets/logo.jpg" alt="">
            <br>
            <span class="title">MOTEL1969.COM</span>
            <br>
            <br>
            <router-link :to="{path: '/home'}">首 页</router-link>
            <router-link :to="{path: '/analysis'}">统 计</router-link>
            <router-link :to="{path: '/about'}">关 于</router-link>
        </div>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <p style="text-align: center">coming soon ...</p>
    </div>
</template>

<script>
    import Home from './components/Home.vue'

    export default {
        name: 'app',
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    html, body {
        margin: 0;
        /*padding: 20px;*/
        background: #f1f1f1;
        color: #2c3e50;

        &::-webkit-scrollbar {
            display: none
        }
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        .header {
            text-align: center;
            margin-top: 30px;
            margin-bottom: 20px;

            .title {
                font-size: 12px;
                font-weight: bold;
            }

            a {
                color: #2c3e50;
                text-decoration: none;
                display: inline-block;
                text-align: center;
                width: 40px;
                line-height: 3em;
                margin: 0 20px;
                /*font-size: 18px;*/

                &.router-link-exact-active {
                    border-bottom: 2px solid #333;
                    font-weight: bold;
                }
            }
        }
    }
</style>
