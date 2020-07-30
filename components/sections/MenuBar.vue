<template>
	<nav
		class="navbar align-stretch navbar-expand-lg flex-nowrap navbar-light bg-light justify-content-between"
	>
		<div class="logo-men ml-lg-3 ml-1">
			<nuxt-link to="/app">
				<app-logo class="logo-menu" />
			</nuxt-link>
		</div>
		<div class="section-title text-center">
			<span class="animated fadeInUp">
				<i class="fas fa-arrow-left mr-1" @click="goBack" />
				{{ activePage }}
			</span>
		</div>
		<button
			class="nav-items-container b-none text-right navbar-toggler order-3"
			type="button"
			@click.prevent="toggleMobileMenu"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<nav-items-mobile v-if="mobileMenuOpen" />
		<nav-items class="nav-items-container d-none d-lg-block" />
	</nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import AppLogo from '../AppLogo.vue';
import NavItems from '@/components/sections/NavItems';
import NavItemsMobile from '@/components/sections/NavItemsMobile';

export default {
	name: 'MenuBar',

	components: {
		AppLogo,
		NavItemsMobile,
		NavItems,
	},

	data() {
		return {
			mobileMenuOpen: false,
		};
	},

	computed: {
		...mapState(['activePage']),
	},

	methods: {
		goBack() {
			this.$router.go(-1);
		},

		toggleMobileMenu() {
			if (this.mobileMenuOpen === false) {
				this.mobileMenuOpen = true;
			} else {
				this.mobileMenuOpen = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.navbar {
	position: fixed;
	top: 0%;
}
.fa-arrow-left {
	font-size: 0.8em;
}

.fa-arrow-left:hover {
	cursor: pointer;
}

i {
	color: #333;
	font-size: 1.5em;
	transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s;
}

.navbar {
	z-index: 4;
	background-color: $alpha !important;
	border-radius: 0px 0px 16px 16px;
	box-shadow: $box-shadow-static;
	min-width: 100%;
	padding: 2% 0%;
	@media screen and (min-width: 800px) {
		padding: 1% 0%;
	}
}

span,
li,
ul {
	transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
	list-style-type: none;
}

.nav-items-container {
	flex-basis: 10%;
	@media (min-width: 993px) {
		flex-basis: 30%;
	}
}

.section-title {
	text-align: center;
	flex-basis: 50%;

	@media (min-width: 993px) {
		flex-basis: 40%;
	}

	span {
		@extend .h1-font;
		font-size: var(--h5);

		color: #333333;
	}
}

.logo-men {
	flex-basis: 20%;
	@media (min-width: 993px) {
		flex-basis: 30%;
	}
}
.icons-navbar {
	text-align: right;
}
.icons-navbar > * {
	padding-right: 10%;
	font-size: 1.5em;
}
li {
	padding-right: 1em;
}
</style>
