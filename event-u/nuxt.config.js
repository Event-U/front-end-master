module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Event-u',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Event-u' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" },
            { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", crossorigin: "anonymous" }

        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
            { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' },
            { src: "https://kit.fontawesome.com/767b73986e.js", crossorigin: "anonymous" }
        ]

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
    },
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: 'UA-159826239-1'
        }]
    ],
    modules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: [
            './style/_variables.scss'
        ]
    },
}