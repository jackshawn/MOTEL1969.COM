<template>
    <div id="app">
        <div class="header">
            <img src="~/assets/logo.jpg" alt="">
            <br>
            <span class="title">MOTEL1969.COM</span>
            <br>
            <br>
            <nuxt-link to="/">首 页</nuxt-link>
            <nuxt-link to="/analysis">统 计</nuxt-link>
            <nuxt-link to="/about">关 于</nuxt-link>
        </div>
        <nuxt/>
    </div>
</template>

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
                width: 45px;
                line-height: 3em;
                margin: 0 20px;
                /*font-size: 18px;*/

                &.nuxt-link-exact-active {
                    border-bottom: 2px solid #f44336;
                    font-weight: bold;
                }
            }
        }
    }
</style>
