<template>
	<div
		class="page-enter-active navbar d-flex justify-content-between animated fadeInDown"
	>
		<nuxt-link to="/">
			<app-logo class="logo-menu col-4" />
		</nuxt-link>
		<div class="section-title col-4">
			<h1 class="animated fadeInUp">
				<i class="fas fa-arrow-left mr-3" @click="goBack"> </i>
				{{ activePage }}
			</h1>
		</div>
		<div class="icons-navbar col-2">
			<i class="fas fa-search"></i>
			<nuxt-link to="/planner/calendar">
				<i class="fas fa-calendar-alt"></i>
			</nuxt-link>
			<i class="fas fa-cog"></i>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import AppLogo from '../AppLogo.vue';
export default {
	name: 'MenuBar',
	components: {
		AppLogo,
		mapState,
	},
	data() {
		return {
			// name:getActivePage(),
		};
	},
	computed: mapState(['activePage']),
	methods: {
		goBack() {
			this.$router.go(-1);
		},
	},
};
</script>

<style lang="scss" scoped>
.fa-arrow-left {
	font-size: 0.8em;
}
.fa-arrow-left:hover {
	cursor: pointer;
}
i {
	color: #333333;
}
.navbar {
	z-index: 2;
	background-color: $alpha;
	padding: 1% 0%;
	border-radius: 0px 0px 16px 16px;
	box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.235);
}
.section-title {
	text-align: center;
}
.logo-menu {
	max-width: 15%;
}
.icons-navbar {
	text-align: right;
}
.icons-navbar > * {
	padding-right: 10%;
	font-size: 1.5em;
}
h1 {
	@extend .h1-font;
	font-size: 1.7em;
	color: #333333;
}
</style>
