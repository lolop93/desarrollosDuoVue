<template>
  <div class="flex w-full bg-duogreen shadow-2xl">
    <div class="flex w-1/2 justify-start content-center my-5 mx-10">
      <img class="logo" src="../assets/lohohorizontal.png" alt="logo">
    </div>
      <div id="nav" class=" flex gap-10 justify-end w-1/2 bg-duogreen p-4 m-5">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"><router-link to="/about">Sobre Nosotros</router-link></div>
        <div class="menu-item"><router-link to="/contacto">Contacto</router-link></div>
        <div class="menu-item"><router-link to="/equipo">Equipo</router-link></div>
        <div class="menu-item"><router-link to="/portfolio">Portfolio</router-link></div>
        <div class="menu-item" @mouseover="verMenu = true" @mouseleave="verMenu = false">
          <router-link to="/servicios">Servicios</router-link>
          <i class="fas fa-arrow-circle-down ml-2" @click="verMenu = true"></i>
          <div class="submenu-item w-full absolute top-8"  v-if="verMenu">
            <div class="w-full bg-gray-800 text-white p-1 mb-2">mierda</div>
            <div class="w-full bg-gray-800 text-white p-1 mb-2">mierda</div>
            <div class="w-full bg-gray-800 text-white p-1 mb-2">mierda</div>
            <div class="w-full bg-gray-800 text-white p-1">mierda</div>
          </div>
        </div>
      </div>

  </div>

</template>

<script>
export default {
  name: "miHeader",
  data(){
    return{
      verMenu: false,
    };
  }
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
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }


</style>