<template>
	<div
		class="eventcard card mb-3  text-lg-left"
		@mouseover="hoverCard = true"
		@mouseleave="hoverCard = false"
	>
		<div class="post-module">
			<div class="thumbnail">
				<div class="date">
					<div class="day">{{ date | dayNumber }}</div>
					<div class="month">{{ date | monthNumber }}</div>
				</div>
				<img class="img-fluid" :src="image" />
			</div>
			<div class="post-content d-flex flex-column">
				<div class="category animated fadeInLeft">Nuevo</div>
				<div class="event-categories-wrapper"></div>
				<h3 class="title">{{ name }}</h3>
				<p class="description animated fadeInUp faster" v-if="hoverCard">
					{{ description }}
				</p>
				<div v-if="!isNewEvent" class="cta-event">
					<button v-if="isOrganizador" class="btn-eventu" @click="goToBoard">
						Ver Tablero
					</button>
					<nuxt-link
						:to="
							isOrganizador
								? `/app/organizador/evento/${_id}/necesidades`
								: `/app/proveedor/evento/${_id}/necesidades`
						"
					>
						<button class="btn btn-eventu" @click="setActiveEvent">
							Ver Necesidades
						</button>
					</nuxt-link>
				</div>
				<div class="post-meta">
					<span class="timestamp">
						<i class="fas fa-compass" />
						{{ address ? `${address.state} - ${address.place} ` : 'Tonalá 10' }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import api from '@/lib/api';
import moment from 'moment';

const stringDefault = {
	type: String,
	required: true,
	default: '',
};
export default {
	name: 'EventCard',

	props: {
		name: stringDefault,
		description: stringDefault,
		date: stringDefault,
		address: Object,
		image: stringDefault,
		_id: {
			type: String,
			required: false,
		},
		needs: Array,
	},

	data() {
		return {
			hoverCard: false,
		};
	},

	filters: {
		dayNumber: function(d) {
			return moment(d).format('D');
		},

		monthNumber: function(d) {
			return moment(d)
				.locale('es')
				.format('MMM');
		},
	},

	computed: {
		isOrganizador() {
			return this.$route.path.includes('organizador');
		},
		isNewEvent() {
			return this.$route.path.includes('nuevo-evento');
		},
	},

	methods: {
		setActiveEvent() {
			this.$store.commit('events/SET_ACTIVE_EVENT', {
				needs: this.needs,
				name: this.name,
				description: this.description,
				date: this.date,
				addreses: this.addresses,
				image: this.image,
				_id: this._id,
			});
		},

		async goToBoard() {
			await this.$store.dispatch('board/getEventBoard', this._id);

			this.$router.push({
				name: 'app-planificador-tablero-evento-id',
				params: { id: this._id },
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.btn-eventu {
	background-color: $complementary;
	color: white;
	@extend .h3-font;
	padding: 2% 5%;
	&:hover {
		background-color: $complementary200;
		transition: 0.8s ease-in-out;
	}
	font-size: 0.8em;
}

.event-categories {
	font-size: 0.7em;
	background-color: rgba(223, 221, 221, 0.707);
	color: #333;
	@extend .h3-font;
	padding: 0.8% 2%;
	border-radius: 5px;
}

.post-module {
	position: relative;
	z-index: 1;
	display: block;
	background: #ffffff;
	height: 470px;
	box-shadow: $box-shadow-static;
	transition: 0.7s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-module:hover {
	box-shadow: $box-shadow-hover;
	transition: 0.8s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-module:hover .thumbnail img {
	border-radius: 8px;
	transform: scale(1.1);
	opacity: 0.6;
	transition: 0.8s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-module .thumbnail {
	background: #000000;
	height: 400px;
	overflow: hidden;
	transition: ll 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.date {
	position: absolute;
	top: 10px;
	right: 20px;
	z-index: 1;
	background: $alpha;
	@extend .h2-font;
	width: 55px;
	height: 55px;
	padding: 5.5px 0;
	border-radius: 100%;
	color: #333;
	font-weight: 400;
	text-align: center;
	box-sizing: border-box;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-module .thumbnail .date .day {
	font-size: 18px;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-module .thumbnail .date .month {
	font-size: 12px;
	text-transform: uppercase;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-module .thumbnail img {
	display: block;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-content {
	position: absolute;
	padding-top: 11px !important;
	bottom: 0;
	background: #ffffff;
	width: 100%;
	padding: 30px;
	box-sizing: border-box;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
}

.post-module .post-content .category {
	position: absolute;
	top: -40px;
	left: 0;
	background: $alpha;
	border-radius: 0px 5px 0px 0px;
	padding: 10px 15px;
	color: #333333;
	font-size: 14px;
	font-weight: 600;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
	text-transform: uppercase;
}

.post-module .post-content .title {
	@extend .h2-font;
	margin-top: 0.2em;
	padding: 0 0 10px;
	color: #333333;
	font-size: 2em;
	font-weight: 400;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-module .post-content .sub_title {
	margin: 0;
	padding: 0 0 20px;
	color: #e74c3c;
	font-size: 20px;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
	font-weight: 400;
}

.description {
	transition: cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.3s;
	color: #666666;
	font-size: 14px;
	line-height: 1.8em;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.post-module .post-content .post-meta {
	margin: 30px 0 0;
	color: #999999;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .post-content .post-meta .timestamp {
	margin: 0 16px 0 0;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.post-module .post-content .post-meta a {
	color: #999999;
	text-decoration: none;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.eventcard {
	margin: 0 auto;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
.eventcard:before,
.eventcard:after {
	content: '';
	display: block;
	clear: both;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}

.eventcard .info {
	margin: 50px auto;
	text-align: center;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
h3 {
	margin: 0 0 15px;
	padding: 0;
	font-size: 24px;
	font-weight: bold;
	color: #333333;
	transition: 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05);
}
</style>
