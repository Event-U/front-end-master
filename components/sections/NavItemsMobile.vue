<template>
	<div class="nav-menu-mobile text-right">
		<ul id="accordion">
			<li
				@click="openMenu('organizador')"
				class="nav-item aling-stretch align-center"
				:class="{
					activeItem: isOrganizador,
				}"
			>
				<button
					class="btn collapsed"
					data-toggle="collapse"
					data-target="#collapseThree"
					aria-expanded="false"
					aria-controls="collapseThree"
				>
					<span class="item-name">Organizador</span>
					<i class="fas fa-boxes" />
				</button>
				<div
					id="collapseThree"
					class="collapse"
					aria-labelledby="headingThree"
					data-parent="#accordion"
				>
					<ul class="submenu submenu-items text-right">
						<li>
							<nuxt-link to="/app/organizador/mis-eventos"
								>Mis eventos</nuxt-link
							>
						</li>
						<li>
							<nuxt-link to="/app/organizador/nuevo-evento"
								>Nuevo evento</nuxt-link
							>
						</li>
						<li>
							<nuxt-link to="/app/organizador/mis-cotizaciones"
								>Mis cotizaciones</nuxt-link
							>
						</li>
					</ul>
				</div>
			</li>
			<li
				@click="openMenu('proveedor')"
				class="nav-item"
				:class="{
					activeItem: isProvider,
				}"
			>
				<button
					class="btn collapsed"
					data-toggle="collapse"
					data-target="#collapseTwo"
					aria-expanded="false"
					aria-controls="collapseTwo"
				>
					<span class="item-name">Proveedor</span>
					<i class="fas fa-layer-group" />
				</button>
				<div
					id="collapseTwo"
					class="collapse"
					aria-labelledby="headingTwo"
					data-parent="#accordion"
				>
					<ul class="submenu submenu-items text-right">
						<li>
							<nuxt-link to="/app/proveedor/eventos">Eventos</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/app/proveedor/mis-servicios"
								>Mis servicios</nuxt-link
							>
						</li>
						<li>
							<nuxt-link to="/app/proveedor/mis-cotizaciones"
								>Mis cotizaciones</nuxt-link
							>
						</li>
					</ul>
				</div>
			</li>
			<li
				@click="openMenu('planificador')"
				class="nav-item"
				:class="{
					activeItem: isPlanner,
				}"
			>
				<button
					class="btn"
					data-toggle="collapse"
					data-target="#collapseOne"
					aria-expanded="true"
					aria-controls="collapseOne"
				>
					<span class="item-name">Planificador</span>
					<i class="fas fa-calendar-alt" />
				</button>

				<div
					id="collapseOne"
					class="collapse collapsed"
					aria-labelledby="headingOne"
					data-parent="#accordion"
				>
					<ul
						class="submenu submenu-items text-right"
						@mouseleave="closeCollapse"
					>
						<li>
							<nuxt-link to="/app/planificador/calendario"
								>Calendario</nuxt-link
							>
						</li>
						<li>
							<nuxt-link to="/app/planificador/tablero">Tableros</nuxt-link>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'NavItemsMobile',

	data() {
		return {
			hoverOrganizador: false,
			hoverProveedor: false,
			hoverPlanificador: false,

			collapseOrganizador: false,
			collapseProveedor: false,
			collapsePlanificador: false,
		};
	},

	computed: {
		isOrganizador() {
			return this.$route.path.includes('organizador');
		},

		isProvider() {
			return this.$route.path.includes('proveedor');
		},

		isPlanner() {
			return this.$route.path.includes('planificador');
		},
	},

	methods: {
		goBack() {
			this.$router.go(-1);
		},

		closeCollapse() {
			this.collapseOrganizador = false;
			this.collapseProveedor = false;
			this.collapsePlanificador = false;
		},

		unHoverAll() {
			this.hoverOrganizador = false;
			this.hoverProveedor = false;
			this.hoverPlanificador = false;
		},

		closeAll() {
			this.collapseOrganizador = false;
			this.collapseProveedor = false;
			this.collapsePlanificador = false;

			this.hoverOrganizador = false;
			this.hoverProveedor = false;
			this.hoverPlanificador = false;
		},

		openMenu(target) {
			this.closeCollapse();
			switch (target) {
				case 'organizador':
					this.collapseOrganizador = true;
					break;
				case 'planificador':
					this.collapsePlanificador = true;
					break;
				case 'proveedor':
					this.collapseProveedor = true;
					break;

				default:
					break;
			}
		},

		hoverItem(target) {
			this.unHoverAll();
			switch (target) {
				case 'organizador':
					this.hoverOrganizador = true;
					break;
				case 'planificador':
					this.hoverPlanificador = true;
					break;
				case 'proveedor':
					this.hoverProveedor = true;
					break;

				default:
					break;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.nav-menu-mobile {
	position: relative;
	top: 100%;
	right: 0%;
	background-color: #eeeeee;
	border-radius: 0px 0px 16px 16px;
	position: absolute;
	margin: 0;
	animation: goUp 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes goUp {
	0% {
		opacity: 0.3;
		top: 50%;
	}
	100% {
		opacity: 1;
	}
}

ul {
	list-style-type: none;
}

.activeItem {
	i {
		font-size: 1.9em;
		color: black;
	}
	span {
		text-decoration: underline;
	}
}
</style>
