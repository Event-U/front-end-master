<template>
<form
	class="mb-3"
>
	<h1 class="text-center mt-3 animated slideInDown">
		Agrega la dirección del evento
	</h1>
	<div class="row m-0 mt-3">
		<div class="col-md-9 text-center">
			<input 
				type="text" 
				class="form-control text-center" 
				placeholder="Dirección con calle"
				v-model="adressObject.street"
			>
		</div>
	</div>
	<div class="row m-0 mt-3">
		<div class="col-md-3 m-0">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Número exterior"
				v-model="adressObject.numberExt"
			>
		</div>
		<div class="col-md-2 m-0">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Número interior"
				v-model="adressObject.numberInt"
			>
		</div>
		<div class="col-md-4 m-0">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Código postal"
				v-model="adressObject.CP"
			>
		</div>
	</div>
	<div class="row m-0 mt-3">
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
		<div class="col-md-2">
			<input 
				type="text" 
				class="form-control" 
				placeholder="Colonia"
				v-model="adressObject.town"
			>
		</div>
		<div class="col-md-3">
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
		class="btn btn-primary mt-3 animated slideInUp"
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
						CP:undefined,
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
         this.$emit('newAdress', {
                categoryId:this.categoryId,
                service:this.service,
                description:this.description,
                _id:this.$store.state.need.newNeed._id,
            })
			}
		},
}
</script>

<style lang='scss' scoped>
button{
	@extend .h3-font;
	background-color:$complementary;
	padding:1% 4%;
	box-shadow: 3px 4px 8px #00000098;
	transition:cubic-bezier(0.77, 0, 0.175, 1) .4s;
	font-size: 1.04em;

}
button:hover{
	font-size: 1em;
	background-color:$complementary;
	padding:1% 4%;
	box-shadow: 3px 4px 4px #00000099;
	transition:cubic-bezier(0.77, 0, 0.175, 1) .2s;

}

h1{
	@extend .h1-font;
}
.row{
    align-content: center;
    justify-content: center;
}
form{
    align-content: center;
    justify-content: center;
    text-align: center;
}
</style>