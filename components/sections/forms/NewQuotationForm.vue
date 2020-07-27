<template>
	<form class="text-center">
		<h3 class="text-center">{{ serviceName.name }}</h3>
		<p>{{ activeNeed.description }}</p>
		<div class="form-group">
			<label for="newServiceName">Precio de tu cotización</label>
			<div class="input-group-prepend">
				<div class="input-group-text">$</div>
				<input
					class="form-control"
					aria-describedby="emailHelp"
					v-model="newQuotationObject.price"
					@blur="$v.newQuotationObject.price.$touch"
					:class="{
						'form-control is-invalid animated pulse':
							$v.newQuotationObject.price.$error,
						'is-valid form-control': !$v.newQuotationObject.price.$invalid,
					}"
				/>
				<span
					v-if="
						$v.newQuotationObject.price.$error &&
							!$v.newQuotationObject.price.required
					"
					class="invalid-feedback animated fadeInLeft faster"
				>
					El precio es requerido
				</span>
				<span
					v-if="
						$v.newQuotationObject.price.$error &&
							!$v.newQuotationObject.price.notZero
					"
					class="invalid-feedback animated fadeInLeft faster"
				>
					El precio no puede ser menor a $50 para tu cotización
				</span>
			</div>
		</div>
		<div class="form-group">
			<label for="validationTextarea">Descripción de tu cotización</label>
			<textarea
				class="form-control"
				id="validationTextarea"
				@blur="$v.newQuotationObject.description.$touch"
				:class="{
					'form-control is-invalid animated pulse':
						$v.newQuotationObject.description.$error,
					'is-valid form-control': !$v.newQuotationObject.description.$invalid,
				}"
				v-model="newQuotationObject.description"
			/>
			<span
				v-if="
					$v.newQuotationObject.description.$error &&
						!$v.newQuotationObject.description.required
				"
				class="invalid-feedback animated fadeInLeft faster"
			>
				La descripción es requerida
			</span>
			<span
				v-if="
					$v.newQuotationObject.description.$error &&
						!$v.newQuotationObject.description.maxLength
				"
				class="invalid-feedback animated fadeInLeft faster"
			>
				La descripción no puede contener más de
				{{ $v.newQuotationObject.description.$params.maxLength.max }} caracteres
			</span>
			<span
				v-if="
					$v.newQuotationObject.description.$error &&
						!$v.newQuotationObject.description.minLength
				"
				class="invalid-feedback animated fadeInLeft faster"
			>
				La descripción no puede contener más de
				{{ $v.newQuotationObject.description.$params.minLength.min }} caracteres
			</span>
		</div>
		<div class="form-group">
			<label for="quotation-image">Sube tu imagen</label>
			<input
				type="text"
				class="form-control"
				id="quotation-image"
				v-model="newQuotationObject.image"
				@blur="$v.newQuotationObject.image.$touch"
				:class="{
					'form-control is-invalid animated pulse':
						$v.newQuotationObject.image.$error,
					'is-valid form-control': !$v.newQuotationObject.image.$invalid,
				}"
			/>
			<span
				v-if="
					$v.newQuotationObject.image.$error &&
						!$v.newQuotationObject.image.required
				"
				class="invalid-feedback animated fadeInLeft faster"
			>
				Necesitas seleccionar al menos una imagen para tu servicio
			</span>
			<span
				v-if="
					$v.newQuotationObject.image.$error &&
						!$v.newQuotationObject.image.supportedImageFile
				"
				class="invalid-feedback animated fadeInLeft faster"
			>
				La imagen de tu servicio tiene que ser un formato válido de imagen
			</span>
			<span
				v-if="
					$v.newQuotationObject.image.$error && !$v.newQuotationObject.image.url
				"
				class="invalid-feedback animated fadeInLeft faster"
			>
				Inserta una URL válida
			</span>
		</div>
		<button
			class="btn btn-primary mb-3 btn-lg btn-block"
			@click.prevent="postQuotation(newQuotationObject)"
		>
			Subir Cotización
		</button>
	</form>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import api from '@/lib/api.js';

import Vuelidate from 'vuelidate';
import {
	required,
	minLength,
	maxLength,
	url,
	helpers as vuelidateHelpers,
} from 'vuelidate/lib/validators';

export default {
	name: 'NewQuotationForm',

	data() {
		return {
			newQuotationObject: {
				price: 0,
				description: '',
				image: '',
			},
		};
	},

	validations: {
		newQuotationObject: {
			price: {
				required,
				notZero: (select) => select >= 50,
			},

			description: {
				required,
				minLength: minLength(10),
				maxLength: maxLength(35),
			},

			image: {
				required,
				url,
				supportedImageFile(value) {
					if (!vuelidateHelpers.req(value)) {
						return true;
					}
					const supported = ['jpg', 'jpeg', 'gif', 'png', 'svg'];
					const suffix = value.split('.').pop();
					return supported.includes(suffix);
				},
			},
		},
	},

	props: {
		userid: String,
		need: Object,
	},

	mounted() {
		this.$store.dispatch('services/getNameService', this.service);
	},

	computed: {
		...mapState({
			activeNeed: (state) => state.needs.activeNeed,

			serviceName: (state) => state.needs.activeNeed.service,

			activeUser: (state) => state.activeUser,
		}),
	},

	methods: {
		postQuotation({ price, description, image }) {
			this.$store.dispatch('quotations/postQuotation', {
				provider: this.activeUser,
				price: price,
				description: description,
				image: image,
				need: this.activeNeed._id,
				status: 1,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
label {
	@extend .h4-font;
}
h3 {
	@extend .h2-font;
	font-size: 2em;
}
.btn-primary {
	@extend .h3-font;
	font-size: 1em;
	background-color: $complementary;
	// padding: 2% 37%;
}
</style>
