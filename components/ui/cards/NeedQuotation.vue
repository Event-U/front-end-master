<template>
	<div class="card animated fadeInUp" style="max-width: 540px;">
		<div class="d-flex no-gutters">
			<div class="col-md-4 col-5 image-bg ml-3" :style="styles"></div>
			<div class="col-md-6 col-5">
				<div class="card-body text-left">
					<h5 class="card-title">{{ provider.bussinesName }}</h5>
					<p class="card-text">{{ description }}</p>
					<h6 class="card-text">
						<span class="d-block">${{ price }}</span>
						<small :class="`status-${status}`">{{ status | statusText }}</small>
					</h6>
				</div>
			</div>
			<div
				class="col-md-1 col-1 justify-content-center align-self-center animated fadeInRight delay-1s"
				data-toggle="tooltip"
				data-placement="right"
				title="Guardar cotización"
				v-if="this.$route.path.includes('organizador')"
			>
				<div
					data-dismiss="modal"
					class="quotation-actions d-flex flex-column justify-content-around text-center"
				>
					<i
						class="fas fa-star save"
						data-toggle="tooltip"
						data-placement="right"
						title="Guardar cotización"
						@click="updateQuotationState(2, _id)"
					/>
					<i
						class="fas fa-check aware"
						data-toggle="tooltip"
						data-placement="right"
						title="Adjudicar cotización"
						@click="updateQuotationState(4, _id)"
					/>
					<i
						class="fas fa-times delete"
						data-toggle="tooltip"
						data-placement="right"
						title="Deshechar cotización"
						@click="updateQuotationState(3, _id)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NeedQuotation',
	props: {
		_id: String,
		provider: Object,
		price: Number,
		image: String,
		status: Number,
		date: String,
		description: String,
		quotation: {},
	},

	filters: {
		statusText(status) {
			switch (status) {
				case 4:
					return 'Adjudicada';

				case 3:
					return 'Eliminada';

				case 2:
					return 'Favorita';
			}
		},
	},

	computed: {
		myQuotations() {
			return this.$route.path.includes('mis-cotizaciones');
		},

		styles() {
			return {
				'background-image': `url(${this.image})`,
				'background-repeat': 'no-repeat',
				'background-size': 'cover',
			};
		},
	},

	methods: {
		updateQuotationState(status, id) {
			this.$store.dispatch('quotations/updateQuotation', {
				status,
				id,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.status-4 {
	color: $complementary;
}

.status-3 {
	color: $danger;
}

.status-2 {
	color: $alpha;
}

i:hover {
	cursor: pointer;
}
p {
	@extend .body-font;
}
h5 {
	@extend .h2-font;
}
.image-bg {
	display: flex;
	flex-flow: column-reverse;
	box-shadow: 2px 2px 21px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	h6 {
		color: #b8b8b8;
		text-align: left;
	}
}
.card {
	border: none;
	width: 100%;
}
.quotation-actions {
	transition: 0.3s ease-out;
	border: 1px solid $alpha-100;
	box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
	border-radius: 8px;
	height: 100px;
	width: 100%;
	font-weight: 800;
	font-size: 1.5em;
	.save {
		color: $alpha;
		transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}
	.aware {
		color: $complementary;
		transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}
	.delete {
		color: $danger;
		transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}
	.save:hover {
		font-size: 1.6em;
		transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}
	.aware:hover {
		font-size: 1.6em;
		transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}
	.delete:hover {
		font-size: 1.6em;
		transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}
}
.quotation-actions:hover {
	border: 2px solid $alpha-100;
	box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.187);
	transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
</style>
