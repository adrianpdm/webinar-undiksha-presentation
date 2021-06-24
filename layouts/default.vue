<template>
  <v-app>
    <v-container>
      <div class="slide-container">
        <Nuxt />
      </div>
    </v-container>
  </v-app>
</template>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.slide-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
