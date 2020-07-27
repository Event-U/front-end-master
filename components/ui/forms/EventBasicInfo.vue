<template>
	<div class="mt-3 my-element">
		<h1 class="title animated fadeIn">¡Comencemos con tu nuevo evento!</h1>
		<div class="form-group animated fadeInDown">
			<div class="form-group col-md-5">
				<label for="eventName">Nombre de tu evento</label>
				<input
					@input="
						{
							setActiveEvent;
						}
					"
					v-model="name"
					type="text"
					:class="{
						'form-control animated pulse is-invalid': $v.name.$error,
						'is-valid form-control': !$v.name.$invalid,
					}"
					id="eventName"
					@blur="$v.name.$touch"
				/>
				<div
					v-if="$v.name.$error && !$v.name.minLength"
					class="invalid-feedback animated fadeInLeft faster"
				>
					El nombre debe contener al menos
					{{ $v.name.$params.minLength.min }} caracteres.
				</div>
				<div
					v-if="$v.name.$error && !$v.name.required"
					class="invalid-feedback animated fadeInLeft faster"
				>
					El nombre de tu evento es requerido 😱
				</div>
			</div>
			<div class="form-group col-md-5 animated fadeInUp delay-1s">
				<label for="exampleFormControlTextarea1"
					>Descripción de tu evento</label
				>
				<textarea
					@input="setActiveEvent"
					v-model="description"
					:class="{
						'form-control is-invalid animated pulse': $v.description.$error,
						'is-valid form-control': !$v.description.$invalid,
					}"
					id="exampleFormControlTextarea1"
					@blur="$v.description.$touch"
				/>
				<div
					v-if="$v.description.$error && !$v.description.minLength"
					class="invalid-feedback animated fadeInLeft faster"
				>
					La descripción debe contener al menos
					{{ $v.description.$params.minLength.min }} caracteres.
				</div>
				<div
					v-if="$v.description.$invalid && !$v.description.required"
					class="invalid-feedback animated fadeInLeft faster"
				>
					La descripción de tu evento es requerida 😱
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import Vuelidate from 'vuelidate';

export default {
	name: 'EventBasicInfo',

	data() {
		return {
			name: '',
			description: '',
		};
	},

	validations: {
		name: {
			required,
			minLength: minLength(3),
			maxlength: maxLength(200),
		},
		description: {
			required,
			minLength: minLength(5),
			maxlength: maxLength(200),
		},
	},

	methods: {
		setActiveEvent() {
			this.$emit('update', {
				name: this.name,
				description: this.description,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
label {
	@extend .h3-font;
}
input,
textarea {
	transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	font-size: 1em;
	border-radius: 5px;
	padding: 2% 0.75rem;
}
input:focus {
	border: 0.6px solid grey;
	box-shadow: 0px 0px 10px #ffff0022;
	transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	@extend .h3-font;
	padding-right: 30px;
	border-radius: 6px;
	font-size: 1em;
}
.form-group {
	margin-bottom: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-self: center;
	text-align: center;
}
h1 {
	@extend .h2-font;
	font-size: 2em;
	font-weight: 200;
	text-align: center;
}
.form-row {
	margin: 0;
	justify-content: center;
}
</style>
