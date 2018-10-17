const movie = require('./assets/data')
let name = (function() {
    let arr = []
    movie.forEach(function(i) {
        i.movie.forEach(function(j) {
            arr.push(j.name)
        })
    })
    return arr
})();

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: 'MOTEL1969',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'MOTEL1969剪辑的所有电影资源,BGM资源,好片分享'},
            {hid: 'keywords', name: 'keywords', content: '经典电影,热门电影,好看的电影,百度云电影,' + name.toString()},
        ],
        script: [
            {src: 'https://hm.baidu.com/hm.js?07c201f86bb993f888b4c9ec71ce4264'}, /*引入百度统计的js*/
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#fff'},

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/assets/baidu.js'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [],

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }
    }
}
