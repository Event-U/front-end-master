<template>
  <div class="board mt-4 text-center">
    <h1>{{board.service.name}}</h1>
    <div class="d-flex justify-content-between" :class="{ blur: isTaskOpen }">
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

  data() {
    return {
      name: 'Planificador servicios',
      newColumnName: '',
    };
  },

  async fetch() {
    if (
      !this.$store.state.board.activeBoard ||
      !this.$store.state.board.activeBoard.service._id ===
        this.$route.params.id ||
      this.$store.state.board.activeBoard.service
    ) {
      await this.$store.dispatch(
        'board/getServiceBoard',
        this.$route.params.id
      );
    }
  },

  mounted() {
    this.$store.commit('change', this.name);
  },

  computed: {
    ...mapState({
      board: (state) => state.board.activeBoard,
    }),

    isTaskOpen() {
      return this.$route.name === 'app-planificador-tablero-tarea-id';
    },
  },

  methods: {
    createColumn() {
      this.$store.dispatch('columns/createNewColumn', {
        name: this.newColumnName,
      });
      this.newColumnName = '';
    },
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
