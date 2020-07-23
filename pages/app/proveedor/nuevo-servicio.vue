<template>
	<div>
		<new-service-form />
	</div>
</template>

<script>
import NewServiceForm from '@/components/sections/forms/NewServiceForm.vue';

export default {
	name: 'NewService',

	components: {
		NewServiceForm,
	},

	data() {
		return {
			name: 'Nuevo Servicio',
		};
	},

	mounted() {
		this.$store.commit('change', this.name);
	},

	head() {
		return {
			title: 'Nuevo servicio',
			meta: [
				{ 'og:title': 'Sitio web para organizar eventos en México' },
				{ 'og:type': 'page' },
				{
					'og:description':
						'Comienza a generar ganancias en el mercado de eventos en México. No importa sí eres organizador, proveedor o inversionista.',
				},
				{ 'og:image': '../assets/landing/images/dashboard.png' },
				{
					hid: 'description',
					name: 'description',
					content: 'La plataforma #1 para organizar eventos en México',
				},
			],
		};
	},
};
</script>

<style></style>
