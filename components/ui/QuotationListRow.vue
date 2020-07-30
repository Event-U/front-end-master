<template>
	<tr>
		<th class="important" scope="row">
			{{ isOrganizador ? need.description : need.service.category.name }}
		</th>
		<td>{{ need.service.name }}</td>
		<td class="d-lg-block d-none">
			{{ isOrganizador ? provider.bussinesName : need.description }}
		</td>
		<td v-if="isOrganizador">${{ price }}mxn</td>
		<td v-if="isOrganizador">
			<button
				type="button"
				@click="ariaHidden = false"
				class="btn btn-secondary"
				data-toggle="modal"
				:data-target="`#exampleModal` + _id"
			>
				Ver cotización
			</button>
			<div
				class="modal fade"
				:id="`exampleModal` + _id"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				v-if="ariaHiden"
				:aria-hidden="ariaHiden"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content pt-3">
						<need-quotation
							v-if="ariaHiden"
							:_id="_id"
							:status="status"
							:provider="provider"
							:price="price"
							:image="image"
							:date="date"
							:description="description"
						/>
						<div class="modal-footer">
							<button type="button" class="btn btn-danger" data-dismiss="modal">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</td>
		<td class="state-icon">
			<i v-if="status === 2 && isOrganizador" class="fas fa-star" />
			<i v-if="status === 4 && isOrganizador" class="fas fa-check" />
			<span
				v-if="status === 4 && !isOrganizador"
				type="button"
				class="btn btn-success"
				:data-target="`#exampleModal` + _id"
				data-toggle="modal"
				>Aceptada</span
			>
			<span v-if="status === 2 && !isOrganizador" class="btn btn-complementary"
				>Guardada</span
			>
			<span v-if="status === 1" class="btn pending" disabled>Pendiente</span>
			<span
				v-if="status === 3 && !isOrganizador"
				class="btn btn-danger"
				disabled
				>Denegada</span
			>
		</td>
	</tr>
</template>

<script>
const stringDefault = {
	required: true,
	type: String,
};

export default {
	name: 'QuotationListRow',

	data() {
		return {
			ariaHiden: true,
		};
	},

	components: {
		NeedQuotation: () => import('@/components/ui/cards/NeedQuotation.vue'),
	},

	props: {
		_id: stringDefault,
		provider: Object,
		price: Number,
		description: String,
		image: String,
		need: Object,
		status: Number,
		event: Object,
		date: String,
		isOrganizador: Boolean,
	},
};
</script>

<style lang="scss" scoped>
.important {
	font-weight: 900;
}

tr:hover {
	box-shadow: $box-shadow-hover;
	border-radius: 8px !important;
	transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
	border: 1px solid #cccccc;
}

tr {
	transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}

th,
td {
	vertical-align: middle;
	text-align: center;
}
.modal-content {
	border-radius: 8px;
	border: none;
	transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.state-icon {
	color: $complementary;
	font-size: 1.5em;
}
</style>
