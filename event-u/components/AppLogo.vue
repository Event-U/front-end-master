<template>
  <img
    class="logo-animate" 
    src="@/assets/logo-classic.png" 
    alt="logo-event-u">
</template>

<style>
.logo-animate {
  animation: godown 1.5s linear forwards 3s;
  max-width: 40%;
}

@keyframes godown {
  0% {
    opacity: 1;
  }
  100%{
    opacity:.3,
  }
}
</style>

