<template>
	<div class="mt-3 container-fluid align-items-stretch">
		<div class="mt-3 mb-3 m-0 row d-flex justify-content-center">
			<button
				@click="ariaHidden = false"
				class="btn btn-iconed cta-service"
				data-toggle="modal"
				data-target="#ServiceForm"
			>
				<i class="fas fa-arrow-alt-circle-up" />
				Agregar servicio
			</button>
			<div
				class="modal fade"
				id="ServiceForm"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				:aria-hidden="ariaHidden"
				v-if="!ariaHidden"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content m-lg-3 p-3">
						<new-service-form />
						<button
							type="button"
							class="btn btn-border mb-3"
							data-dismiss="modal"
						>
							Cerrar formulario
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="service-row row d-flex align-items-stretch">
			<div
				class="col-md-3 col-12 mt-3"
				v-for="service in services"
				:key="service._id"
			>
				<service-card class="border-0 s-c" v-bind="service" />
			</div>
		</div>
	</div>
</template>

<script>
import ServiceCard from '@/components/ui/cards/ServiceCard.vue';
import { mapState } from 'vuex';

export default {
	name: 'MyServices',

	components: {
		ServiceCard,
		NewServiceForm: () =>
			import('@/components/sections/forms/NewServiceForm.vue'),
	},

	data() {
		return {
			name: 'Mis servicios',
			ariaHidden: true,
		};
	},

	mounted() {
		this.$store.commit('change', this.name);
	},

	async fetch({ store }) {
		await store.dispatch('services/fetchServices');
	},

	computed: mapState({
		services: (state) => state.services.services,
	}),

	head() {
		return {
			title: 'Mis servicios',
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

<style lang="scss" scoped>
.s-c {
	border-radius: 8px !important;
	box-shadow: $box-shadow-static;
	transition: 0.3s ease-in-out;
}
.s-c:hover {
	transition: ease-in-out 0.4s;
	box-shadow: $box-shadow-hover;
}
.row {
	margin: 0;
}
.cta-service {
	@extend .btn-eventu;
	font-size: 1.2em;
	text-align: center;
	align-self: center;
}
.btn {
	transition: 0.4s ease-out;
}
.btn:hover {
	box-shadow: $box-shadow-hover;
	transition: 0.4s ease-in;
}
</style>
