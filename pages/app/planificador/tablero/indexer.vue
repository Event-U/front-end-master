<template>
	<div>
		<new-event-adress />
	</div>
</template>

<script>
import NewEventAdress from '@/components/sections/forms/NewEventAdress';

export default {
	name: 'organizador',
	components: {
		NewEventAdress,
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
