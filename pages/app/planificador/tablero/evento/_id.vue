<template>
  <div class="align-items-center mt-4 text-center container-fluid justify-content-around">
    <h1>{{ board.event.name }}</h1>
    <div class="board d-flex justify-content-between" :class="{ blur: isTaskOpen }">
      <column
        v-for="(column, columnIndex) in board.columns"
        :key="columnIndex"
        :column="column"
        :columnIndex="columnIndex"
        :board="board"
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
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Column from '@/components/ui/planner/Column';

export default {
  name: 'BoardEvent',

  components: {
    Column,
  },

  async fetch({ store, params }) {
    if (
      !store.state.board.activeBoard ||
      !store.state.board.activeBoard.event._id === params.id
    ) {
      await store.dispatch('board/getEventBoard', params.id);
    }
  },

  data() {
    return {
      name: 'Planificador eventos',
      newColumnName: '',
    };
  },

  mounted() {
    this.$store.commit('change', this.name);
  },

  computed: {
    isTaskOpen() {
      return this.$route.name === 'app-planificador-tablero-tarea-id';
    },

    ...mapState({
      board: (state) => state.board.activeBoard,
    }),
  },

  methods: {
    createColumn() {
      this.$store.dispatch('columns/createNewColumn', {
        name: this.newColumnName,
      });
      this.newColumnName = '';
    },
  },

  head() {
    return {
      title: `Tablero ${this.board.event.name}`,
      description: `Tablero kan-ban para la planificación del evento ${this.board.event.name}`,
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
h1 {
  @extend .h1-font;
}
.container-fluid {
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

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
  transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.3s;
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
