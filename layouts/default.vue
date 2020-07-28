<template>
	<div class="classic-layout">
		<menu-bar />
		<nuxt class="main-content" />
	</div>
</template>
<script>
import MenuBar from '../components/sections/MenuBar.vue';
import SideBar from '@/components/sections/SideBar.vue';
export default {
	name: 'default',
	components: {
		MenuBar,
		SideBar,
	},

	head() {
		return {
			titleTemplate: '%s | Event-u',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'Comienza a utilizar Event-U y comienza a generar en el mercado de eventos',
				},
			],
		};
	},
};
</script>

<style scoped>
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
.main-content {
	z-index: 0;
}
</style>
