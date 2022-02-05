<template>
  <div class="flex w-full bg-duogreen">
    <div class="flex w-1/2 justify-start content-center my-5 mx-10">
      <img class="logo" src="../assets/lohohorizontal.png" alt="logo">
    </div>
      <div id="nav" class=" flex justify-end w-1/2 bg-duogreen p-4 m-5">
        <router-link to="/">Home</router-link> |
        <router-link to="/sobre">Sobre Nosotros</router-link> |
        <router-link to="/contacto">お兄ちゃん</router-link> |
        <router-link to="/equipo">Equipo</router-link> |
        <router-link to="/portfolio">Portfolio</router-link> |
        <router-link to="/servicios">Servicios</router-link>
      </div>

  </div>

</template>

<script>
export default {
  name: "miHeader"
}
</script>

<style scoped>
  .logo{
    width: 162px;
    height: 94px;
  }

</style>