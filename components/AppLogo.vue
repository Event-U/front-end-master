<template>
	<img
		class="logo-animate "
		src="../assets/logo/logo-black.png"
		alt="logo-event-u"
	/>
</template>

<style lang="scss">
.logo-animate {
	animation: godown 1.5s linear after;
	max-width: 60%;
	@media (min-width: 800px) {
		max-width: 40%;
	}
}

@keyframes godown {
	0% {
		opacity: 0.3;
	}
	100% {
		opacity: 1;
	}
}
</style>
