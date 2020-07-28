<template>
	<form class="mt-3 animated fadeInUp">
		<div class="title">
			<h3 class="mb-3">Nueva necesidad</h3>
		</div>
		<div class="row">
			<div class="input-group mb-3 col-12 col-lg-6">
				<div class="input-group-prepend d-lg-block d-none">
					<label class="input-group-text" for="inputGroupSelect01"
						>Categoría</label
					>
				</div>
				<select
					v-model="categoryId"
					class="custom-select"
					:class="{
						'form-control is-invalid animated pulse': $v.categoryId.$error,
						'is-valid form-control': !$v.categoryId.$invalid,
					}"
					@blur="$v.categoryId.$touch"
					id="inputGroupSelect01"
				>
					<option value>Elige una categoría...</option>
					<option-input
						v-for="category in categories"
						:key="category._id"
						v-bind="category"
					/>
				</select>
				<span
					v-if="$v.categoryId.$error && !$v.categoryId.required"
					class="invalid-feedback animated fadeInLeft faster"
					>La categoría es requerida</span
				>
			</div>
			<div class="input-group mb-3 col-12 col-lg-6">
				<div class="input-group-prepend d-lg-block d-none">
					<label class="input-group-text" for="inputGroupSelect01"
						>Servicio</label
					>
				</div>
				<select
					v-model="service"
					:class="{
						'form-control is-invalid animated pulse': $v.service.$error,
						'is-valid form-control': !$v.service.$invalid,
					}"
					@blur="$v.service.$touch"
					class="custom-select"
					id="inputGroupSelect01"
				>
					<option value>Elige un servicio...</option>
					<option-input
						v-for="serviceOption in servicesByCategoryId(categoryId)"
						:key="serviceOption._id"
						v-bind="serviceOption"
					/>
				</select>
				<span
					v-if="$v.service.$error && !$v.service.required"
					class="invalid-feedback animated fadeInLeft faster"
					>El servicio es requerido</span
				>
			</div>
		</div>
		<div class="input-group">
			<div class="input-group-prepend d-lg-block d-none">
				<span class="input-group-text">Descripción de tu necesidad</span>
			</div>
			<textarea
				class="form-control"
				placeholder="Descripción de tu necesidad"
				aria-label="With textarea"
				:class="{
					'form-control is-invalid animated pulse': $v.description.$error,
					'is-valid form-control': !$v.description.$invalid,
				}"
				@blur="$v.description.$touch"
				v-model="description"
			/>
			<span
				v-if="$v.description.$error && !$v.description.minLength"
				class="invalid-feedback animated fadeInLeft faster"
			>
				La descripción debe contener al menos
				{{ $v.description.$params.minLength.min }}
				caracteres.
			</span>
			<span
				v-if="$v.description.$error && !$v.description.required"
				class="invalid-feedback animated fadeInLeft faster"
			>
				La descripción de tu necesidad es requerida
			</span>
			<span
				v-if="$v.description.$error && !$v.description.maxLength"
				class="invalid-feedback animated fadeInLeft faster"
			>
				La descripción no puede pasar de los
				{{ $v.description.$params.maxLength.max }}
				caracteres.
			</span>
		</div>
		<div class="hover-interaction animated fadeInUp faster">
			<button
				v-if="this.$route.path !== '/app/organizador/nuevo-evento'"
				class="btn btn-iconed mt-3"
				role="button"
				@click.prevent="onSubmit"
			>
				<i class="fas fa-angle-right"></i>
				<span class="spn">Agregar necesidad</span>
			</button>
			<button
				v-if="this.$route.path === '/app/organizador/nuevo-evento'"
				class="btn cta-new btn-iconed mt-3"
				role="button"
				@click.prevent="onSubmitNew"
			>
				<i class="fas fa-angle-right"></i>
				<span class="spn">Agregar nueva necesidad</span>
			</button>
		</div>
	</form>
</template>

<script>
import OptionInput from '@/components/ui/forms/OptionInput.vue';
import { mapState, mapGetters } from 'vuex';

import api from '@/lib/api.js';

import Vuelidate from 'vuelidate';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
	name: 'NewNeedForm',

	components: {
		OptionInput,
	},

	data() {
		return {
			categoryId: '',
			service: '',
			description: '',
		};
	},

	validations: {
		description: {
			required,
			minLength: minLength(10),
			maxLength: maxLength(50),
		},

		service: {
			required,
			notDefault: (select) => select !== '',
		},

		categoryId: {
			required,
			notDefault: (select) => select !== '',
		},
	},

	methods: {
		async onSubmit() {
			await this.$store.dispatch('needs/postNeedToEvent', {
				description: this.description,
				service: this.service,
				quotation: [],
			});
			this.categoryId = '';
			this.serviceId = '';
			this.description = '';
		},

		async onSubmitNew() {
			await this.$store.dispatch('needs/postNeed', {
				description: this.description,
				service: this.service,
				quotation: [],
			}),
				this.$emit('newNeed', {
					categoryId: this.categoryId,
					service: this.service,
					description: this.description,
					_id: this.$store.state.needs.newNeed._id,
				});

			this.categoryId = '';
			this.serviceId = '';
			this.description = '';
		},
	},

	created() {
		this.$store.dispatch('services/fetchCategories');
		this.$store.dispatch('services/fetchServices');
	},

	computed: {
		...mapGetters('services', ['servicesByCategoryId']),

		...mapState({
			categories: (state) => state.services.categories,
		}),
	},
};
</script>

<style lang="scss" scoped>
.cta-new {
	color: $complementary;
}
.hover-interaction {
	@extend .btn-hover-interaction;
	text-align: center;
}
h3 {
	@extend .h2-font;
	font-weight: 200;
	font-size: 2em;
	text-align: center;
}
button {
	@extend .btn-eventu;
	align-self: center;
}
form {
	align-items: center;
	margin: 10%;
}
.input-group-prepend,
label,
.input-group-text {
	background: #eeeeee;
	@extend .h4-font;
	font-weight: 400;
	color: #333333;
	// boder: .2px solid #333333;
	border-radius: 8px;
}
</style>
