export default {
    props: {
        column: {
            type: Object,
            required: true
        },
        columnIndex: {
            type: Number,
            required: true
        },
        board: {
            type: Object,
            required: true
        }
    },
    methods: {
        moveTaskOrColumn(e, toTasks, toColumnIndex) {
            console.log('MoveTaskOrColumn')
            const type = e.dataTransfer.getData('type')
            if (type === 'task') {
                this.moveTask(e, toTasks)
            } else {
                this.moveColumn(e, toColumnIndex)
            }
        },
        moveTask(e, toTasks, toTaskIndex, toColumnId) {
            console.log('MoveTask')
            const fromColumnIndex = e.dataTransfer.getData('from-column-index')
            const fromTasks = this.board.columns[fromColumnIndex].tasks
            const fromTaskIndex = e.dataTransfer.getData('from-task-index')
            this.$store.dispatch('board/moveTask', {
                fromTasks,
                fromTaskIndex,
                toTasks,
                toTaskIndex,
                fromColumnIndex,
                toColumnId
            })
        },
        moveColumn(e, toColumnIndex) {
            console.log('moveColumn')
            const fromColumnIndex = e.dataTransfer.getData('from-column-index')
            this.$store.dispatch('board/moveColumn', {
                fromColumnIndex,
                toColumnIndex
            })
        },
    }
}