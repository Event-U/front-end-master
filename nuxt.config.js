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
			{ name: 'theme-color', content: '#FFFF00' },
			{ name: 'distribution”', content: 'global' },
			{ lang: 'es' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href:
					'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
				integrity:
					'sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh',
				crossorigin: 'anonymous',
			},
			{
				rel: 'stylesheet',
				href:
					'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css',
			},
		],
		script: [
			{ src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
			},
			{
				src:
					'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js',
			},
			{
				src: 'https://kit.fontawesome.com/767b73986e.js',
				crossorigin: 'anonymous',
			},
		],
	},
	/*
	 ** Customize the progress bar color
	 */
	loading: { color: '#333' },
	/*
	 ** Build configuration
	 */
	// build: {
	//     /*
	//      ** Run ESLint on save
	//      */
	//     extend(config, { isDev, isClient }) {
	//         if (isDev && isClient) {
	//             config.module.rules.push({
	//                 enforce: 'pre',
	//                 test: /\.(js|vue)$/,
	//                 loader: 'eslint-loader',
	//                 exclude: /(node_modules)/
	//             })
	//         }
	//     }
	// },
	// generate: {
	//     async routes() {
	//         let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
	//         return response.data.map(post => `posts/${post.id}`)
	//     },
	// }
	modules: [
		[
			'@nuxtjs/google-analytics',
			{
				id: 'UA-159826239-1',
			},
		],
		['@nuxtjs/style-resources'],
		['@nuxtjs/toast'],
	],
	toast: {
		position: 'top-center',
		register: [
			// Register custom toasts
			{
				name: 'my-error',
				message: 'Oops...Something went wrong',
				options: {
					type: 'error',
				},
			},
		],
	},
	styleResources: {
		scss: ['./style/_variables.scss'],
	},
	plugins: [
		{ src: '~/plugins/full-calendar', ssr: false },
		{ src: '~/plugins/vuelidate' },
	],
};
