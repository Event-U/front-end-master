<template>
	<div class="rate">
		<i class="fas fa-star"></i>
		<i class="fas fa-star"></i>
		<i class="fas fa-star"></i>
		<i class="fas fa-star"></i>
		<i class="fas fa-star"></i>
	</div>
</template>

<script>
export default {
	name: 'Raitings',

	props: {
		number: Number,
	},

	data() {
		return {
			actualRate: 4,
		};
	},
};
</script>

<style lang="scss" scoped>
.fa-star:hover {
	color: $alpha;
}
.fa-star:hover {
	color: $alpha;
}
</style>
