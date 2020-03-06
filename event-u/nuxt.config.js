module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Event-U',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Event-u' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" },

        ],
        modules: ['bootstrap-vue/nuxt']
    },
    /*
     ** Customize the progress bar color
     */
    loading: false,
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}