<template>
	<form class="m-3 text-center">
		<h1 class="text-center">Crea un nuevo servicio</h1>
		<div class="form-group">
			<label for="newServiceName">Nuevo servicio</label>
			<input
				class="form-control"
				id="newServiceName"
				aria-describedby="emailHelp"
				@blur="$v.name.$touch"
				:class="{
					'form-control is-invalid animated pulse': $v.name.$error,
					'is-valid form-control': !$v.name.$invalid,
				}"
				v-model="name"
			/>
			<small id="emailHelp" class="form-text text-muted"
				>Recuerda ser lo más conciso posible.</small
			>
			<span
				v-if="$v.name.$error && !$v.name.required"
				class="invalid-feedback animated fadeInLeft faster"
				>El nombre es requerido</span
			>
			<span
				v-if="$v.name.$error && !$v.name.maxLength"
				class="invalid-feedback animated fadeInLeft faster"
			>
				El nombre no puede contener menos de
				{{ $v.name.$params.maxLength.max }} caracteres
			</span>
			<span
				v-if="$v.name.$error && !$v.name.minLength"
				class="invalid-feedback animated fadeInLeft faster"
			>
				El nombre debe contener al menos
				{{ $v.name.$params.minLength.min }} caracteres
			</span>
		</div>
		<div class="form-group">
			<select
				@blur="$v.category.$touch"
				:class="{
					'form-control is-invalid animated pulse': $v.category.$error,
					'is-valid form-control': !$v.category.$invalid,
				}"
				v-model="category"
				class="custom-select"
				id="inputGroupSelect0"
			>
				<option value>Elige una categoría...</option>
				<option-input
					v-for="option in categories"
					:key="option._id"
					v-bind="option"
				/>
			</select>
			<span
				v-if="$v.category.$error && !$v.category.required"
				class="invalid-feedback animated fadeInLeft faster"
				>Debes seleccionar una categoría</span
			>
		</div>
		<div class="form-group">
			<select
				v-model="measurementUnit"
				@blur="$v.measurementUnit.$touch"
				:class="{
					'form-control is-invalid animated pulse': $v.measurementUnit.$error,
					'is-valid form-control': !$v.measurementUnit.$invalid,
				}"
				class="custom-select"
				id="inputGroupSelect01"
			>
				<option value>Precio por unidad</option>
				<option value="Metro">Metro</option>
				<option value="Persona">Persona</option>
				<option value="Unidad">Unidad</option>
				<option value="Hora">Hora</option>
			</select>
			<span
				v-if="$v.measurementUnit.$error && !$v.measurementUnit.required"
				class="invalid-feedback animated fadeInLeft faster"
				>Debes seleccionar una unidad de medida</span
			>
		</div>
		<div class="form-group">
			<label for="newServiceName">Precio por medida</label>
			<div class="input-group-prepend">
				<div class="input-group-text">$</div>
				<input
					class="form-control"
					aria-describedby="emailHelp"
					v-model="unitPrice"
					:class="{
						'form-control is-invalid animated pulse': $v.unitPrice.$error,
						'is-valid form-control': !$v.unitPrice.$invalid,
					}"
					@blur="$v.unitPrice.$touch"
				/>
				<span
					v-if="$v.unitPrice.$error && !$v.unitPrice.required"
					class="invalid-feedback animated fadeInLeft faster"
					>Debes poner una unidad de precio</span
				>
				<span
					v-if="$v.unitPrice.$error && !$v.unitPrice.notZero"
					class="invalid-feedback animated fadeInLeft faster"
					>No puedes poner menos de $10 como precio por unidad de tu
					servicio</span
				>
			</div>
		</div>
		<div class="form-group">
			<label for="newServiceName">Url de tu imagen</label>
			<input
				class="form-control"
				aria-describedby="emailHelp"
				:class="{
					'form-control is-invalid animated pulse': $v.image.$error,
					'is-valid form-control': !$v.image.$invalid,
				}"
				@blur="$v.image.$touch"
				v-model="image"
			/>
			<span
				v-if="$v.image.$error && !$v.image.required"
				class="invalid-feedback animated fadeInLeft faster"
				>Necesitas seleccionar al menos una imagen para tu servicio</span
			>
			<span
				v-if="$v.image.$error && !$v.image.supportedImageFile"
				class="invalid-feedback animated fadeInLeft faster"
				>La imagen de tu servicio tiene que ser un formato válido de
				imagen</span
			>
			<span
				v-if="$v.image.$error && !$v.image.url"
				class="invalid-feedback animated fadeInLeft faster"
				>Inserta una URL válida</span
			>
		</div>
		<div class="form-group">
			<label for="description">Descripción</label>
			<textarea
				type="password"
				class="form-control"
				id="description"
				@blur="$v.description.$touch"
				:class="{
					'form-control is-invalid animated pulse': $v.description.$error,
					'is-valid form-control': !$v.description.$invalid,
				}"
				v-model="description"
			/>
			<span
				v-if="$v.description.$error && !$v.description.maxLength"
				class="invalid-feedback animated fadeInLeft faster"
			>
				El nombre no puede contener mas de
				{{ $v.description.$params.maxLength.max }} caracteres
			</span>
			<span
				v-if="$v.description.$error && !$v.description.minLength"
				class="invalid-feedback animated fadeInLeft faster"
			>
				El nombre no puede contener mas de
				{{ $v.description.$params.minLength.min }} caracteres
			</span>
		</div>
		<button
			type="button"
			class="btn btnnn "
			data-dismiss="modal"
			@click.prevent="postNewService"
		>
			Subir servicio
		</button>
	</form>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import OptionInput from '@/components/ui/forms/OptionInput.vue';

import Vuelidate from 'vuelidate';
import {
	required,
	minLength,
	maxLength,
	url,
	minValue,
	helpers as vuelidateHelpers,
} from 'vuelidate/lib/validators';

const notZero = (select) => select < 0;

export default {
	name: 'NewServiceForm',

	components: {
		OptionInput,
	},

	validations: {
		name: {
			required,
			minLength: minLength(10),
			maxLength: maxLength(35),
		},

		category: {
			required,
			notDefault: (select) => select !== '',
		},

		measurementUnit: {
			required,
			notDefault: (select) => select !== '',
		},

		unitPrice: {
			required,
			notZero: (select) => select >= 10,
		},

		image: {
			required,
			image: (select) => select !== '',
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

		description: {
			required,
			maxLength: maxLength(100),
			minLength: minLength(15),
		},
	},

	data() {
		return {
			name: '',
			category: '',
			measurementUnit: '',
			unitPrice: 0,
			image: '',
			description: '',
			units: ['Metros', 'Hora', 'Unidad', 'Persona'],
		};
	},

	created() {
		this.$store.dispatch('services/fetchCategories');
	},

	computed: {
		...mapState({
			categories: (state) => state.services.categories,

			activeUser: (state) => state.activeUser,
		}),
	},

	methods: {
		postNewService() {
			this.$store.dispatch('services/postService', {
				name: this.name,
				category: this.category,
				measurementUnit: this.measurementUnit,
				unitPrice: this.unitPrice,
				image: this.image,
				description: this.description,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
label {
	@extend .h4-font;
}
.btn {
	width: 100%;
}
.btn:hover {
	box-shadow: $box-shadow-hover;
	transition: 0.3s ease-in;
	// font-size:1.3em;
}
h1 {
	@extend .h1-font;
}
.modal-content {
	border-radius: 8px;
	box-shadow: $box-shadow-static;
}
</style>
