<template>
  <div class="mt-3 mb-3">
    <h1 class="animated fadeIn">Escoge la fecha y la imagen de tu evento</h1>
    <div class="form-row mt-3">
      <div class="form-group col-md-4 animated fadeInLeft faster">
        <label for="eventDate">Fecha de tu evento</label>
        <!-- <input type="text" v-model="date"> -->
        <date-pick
          class="b-none p-3 date-picker"
          v-model="date"
          :pickTime="true"
          :format="'YYYY-MM-DD HH:mm'"
          :parseDate="parseDate"
          :formatDate="formatDate"
          :selectableYearRange="{from: 2020, to: 2021}"
          :isDateDisabled="isNonFutureDay"
          :weekdays="weekdays"
          :months="months"
        />
      </div>
      <div class="form-grp col-md-5 animated fadeInRight faster">
        <label for="addressEvent">Inserta la URL de tu imagen</label>
        <input
          @input="setSpecificEventInfo"
          v-model="image"
          type="email"
          class="form-control"
          id="eventImage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  name: 'EventSpecificInfo',
  components: {
    DatePick,
  },

  data() {
    return {
      date: null,
      image: '',
      weekdays: ['Lun', 'Mar', 'Mié', 'Juev', 'Vier', 'Sab', 'Dom'],
      months: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
    };
  },

  methods: {
    setSpecificEventInfo() {
      this.$emit('update', {
        date: this.date,
        addreses: this.addreses,
        image: this.image,
      });
    },
    isNonFutureDay(d) {
      const currentDate = new Date();
      return d < currentDate;
    },
  },
};
</script>

<style lang='scss' scoped>
label {
  @extend .h4-font;
}
.form-row {
  align-self: center;
  justify-content: center;
  margin: 0;
}
.form-group {
  margin-bottom: 1rem;
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  align-self: center;
  text-align: center;
}
.form-control,
.as-label {
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  font-size: 1em;
}
.form-control:focus,
input:focus {
  border: 0.6px solid grey;
  box-shadow: 0px 0px 10px #ffff0022;
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  @extend .h3-font;
  // font-size: 1.3em;
}
h1 {
  @extend .h2-font;
  font-size: 2em;
  font-weight: 200;
  text-align: center;
}
input {
  @extend .h3-font;
  padding-right: 30px;
  border-radius: 6px;
  font-size: 1em;
}
.vdpTimeUnit > input:hover,
.vdpTimeUnit > input:focus {
  border-bottom-color: #ffff00 !important;
}
</style>