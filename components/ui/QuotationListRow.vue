<template>
  <tr>
    <th scope="row">
      {{
      isOrganizador
      ? need.description
      : need.service.category.name
      }}
    </th>
    <td>{{ need.service.name }}</td>
    <td>
      {{
      isOrganizador
      ? provider.bussinesName
      : need.description
      }}
    </td>
    <td v-if="isOrganizador">${{ price }}mxn</td>
    <td v-if="isOrganizador">
      <button
        type="button"
        @click="ariaHidden = false"
        class="btn"
        data-toggle="modal"
        :data-target="`#exampleModal` + _id"
      >Ver cotización</button>
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
          <div class="modal-content">
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
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar cotización</button>
            </div>
          </div>
        </div>
      </div>
    </td>
    <td class="state-icon">
      <i v-if="status === 2 && isOrganizador" class="fas fa-star text-primary"></i>
      <i v-if="status === 4 && isOrganizador" class="fas fa-check text-success"></i>
      <button
        v-if="status === 2 && !isOrganizador"
        type="button"
        class="btn btn-primary"
        :data-target="`#exampleModal` + _id"
        data-toggle="modal"
      >Aceptada</button>
      <button
        v-if="status === 1 && !isOrganizador"
        type="button"
        class="btn btn-secondary"
        disabled
      >Pendiente</button>
      <button
        v-if="status === 3 && !isOrganizador"
        type="button"
        class="btn btn-danger"
        disabled
      >Denegada</button>
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
tr:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.166);
  border-radius: 8px !important;
  transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  border: 1px solid #cccccc;
}
tr {
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
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
button {
  background-color: $complementary;
  color: white;
}
</style>
