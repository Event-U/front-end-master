<template>
<form>
	<h1 class="text-center">
		Agrega la dirección del evento
	</h1>
	<div class="row m-0">
		<div class="col-md-10">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Tu calle"
				v-model="adressObject.street"
			>
		</div>
	</div>
	<div class="row m-0">
		<div class="col-md-3 m-0">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Número exterior"
				v-model="adressObject.numberExt"
			>
		</div>
		<div class="col-md-3 m-0">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Número interior"
				v-model="adressObject.numberInt"
			>
		</div>
		<div class="col-md-3 m-0">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Código postal"
				v-model="adressObject.CP"
			>
		</div>
	</div>
	<div class="row m-0">
		<div class="col-md-4">
			<select 
				v-model="adressObject.state" 
				class="custom-select" 
				id="inputGroupSelect01"
			>
        <option selected>Estado ...</option>
        <option-input
            v-for="estado in estados"
            :key='estado.id'
            v-bind="estado"
        />
        </select>
		</div>
		<div class="col-md-4">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Colonia"
				v-model="adressObject.town"
			>
		</div>
		<div class="col-md-4">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Delegación"
				v-model="adressObject.place"
			>
		</div>
	</div>
	<button 
		type="button" 
		class="btn btn-primary"
		@click="submitAdress(adressObject)"
	>
		Agregar dirección
	</button>
</form>
</template>

<script>
import {mapActions} from 'vuex'
import optionInput from '@/components/ui/forms/OptionInput'

export default {
		name: 'NewEventAdress',
		components:{
			optionInput
		},
    data(){
        return{
					adressObject:{
						street:'',
						numberExt:'',
						numberInt:'',
						place:'',
						state:'',
						town:'',
						CP:0,
						isFisical:false,
						isPhisical:true,
						users:this.$store.state.activeUser
					},
					estados:this.$store.state.addresses.estadosDeLaRepublic
        }
		},
		mounted(){
			this.user=this.$store.state.activeUser
		},
		methods:{
			submitAdress(adressObject){
				this.$store.dispatch('addresses/submitAdress',adressObject)
			}
		},
}
</script>

<style lang='scss' scoped>
h1{
	@extend .h1-font;
}
</style>