<template>
  <div class="align-items-center mt-4 text-center container-fluid justify-content-around">
    <h1 :class="{ blur: isTaskOpen }">{{ board.service.name }}</h1>
    <div :class="{ blur: isTaskOpen }" class="board d-flex justify-content-between">
      <column
        v-for="(column, columnIndex) in board.columns"
        :key="columnIndex"
        :column="column"
        :columnIndex="columnIndex"
        :board="board"
        @openModalTask="openTask"
      />
      <div class="new-column">
        <input
          type="text"
          class="flex-grow border-0 text-center"
          placeholder="Agregar paso +"
          v-model="newColumnName"
          @keyup.enter="createColumn"
        />
      </div>
    </div>
    <div class="task-bg" v-if="isTaskOpen">
      <modalTask @closeModalTask="closeModalTask" />
    </div>
  </div>
</template>

<script>
import modalTask from '@/components/sections/Planner/ModalTask';

import { mapState, mapGetters, mapActions } from 'vuex';
import Column from '@/components/ui/planner/Column';

export default {
  name: 'BoardEvent',

  components: {
    Column,
    modalTask,
  },

  data() {
    return {
      name: 'Planificador tablero',
      newColumnName: '',
      isTaskOpen: false,
    };
  },

  async fetch({ store, params }) {
    await store.dispatch('board/getServiceBoard', params.id);
  },

  mounted() {
    this.$store.commit('change', this.name);
  },

  computed: {
    ...mapState({
      board: (state) => state.board.activeBoard,
    }),
  },

  methods: {
    openTask() {
      this.isTaskOpen = true;
    },

    closeModalTask() {
      this.isTaskOpen = false;
    },

    createColumn() {
      this.$store.dispatch('columns/createNewColumn', {
        name: this.newColumnName,
      });
      this.newColumnName = '';
    },
  },

  
  head() {
    return {
      title: `Tablero ${this.board.service.name}`,
      description: `Tablero kan-ban para la planificación del servicio ${this.board.service.name}`,
      meta: [
        { 'og:title': 'Sitio web para organizar eventos en México' },
        { 'og:type': 'page' },
        {
          'og:description':
            'Comienza a generar ganancias en el mercado de eventos en México. No importa sí eres organizador, proveedor o inversionista.',
        },
        { 'og:image': '../assets/landing/images/dashboard.png' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Bienvenido al planificador de eventos en donde podrás encontrar diferentes recursos',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

h1 {
  @extend .h1-font;
}

.new-column {
  border: 4px dashed grey;
  background-color: transparent !important;
  margin-top: 1em;
  transition: 0.1s ease-in;
}
.new-column:hover {
  border-radius: 8px;
  transition: 0.2s ease-in-out;
}

.focus-visible {
  border: 1px dashed grey !important;
  // box-shadow: 5px 5px 5px black!important;
  transition: 0.3s ease-in;
  border-radius: 8px;
  color: grey;
}
.blur {
  filter: blur(3px);
  transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s;
}
.board,
.row {
  transition: ease-in-out 0.4s;
}
.d-flex {
  transition: ease-in-out 0.4s;
}
.row {
  margin: 0;
}
.board {
  overflow: auto;
  white-space: nowrap;
}
</style>
