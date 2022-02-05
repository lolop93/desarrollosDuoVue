<template>
  <div class="flex w-full bg-duogreen">
    <div class="flex w-1/2 justify-start content-center my-5 mx-10">
      <img class="logo" src="../assets/lohohorizontal.png" alt="logo">
    </div>
      <div id="nav" class=" flex gap-10 justify-end w-1/2 bg-duogreen p-4 m-5">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Sobre Nosotros</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <router-link to="/equipo">Equipo</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
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
  #nav a.router-link-exact-active {
    color: white;
  }
  #nav a{
    color: #3d3d3d;
  }
  #nav a:hover{
    color: white;
    font-size: 18px;
  }

</style>