<template>
  <div class="flex w-full bg-duogreen">
    <div class="flex w-1/2 justify-start content-center my-5 mx-10">
      <img class="logo" src="../assets/lohohorizontal.png" alt="logo">
    </div>
      <div id="nav" class=" flex gap-10 justify-end w-1/2 bg-duogreen p-4 m-5">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"><router-link to="/about">Sobre Nosotros</router-link></div>
        <div class="menu-item"><router-link to="/contacto">Contacto</router-link></div>
        <div class="menu-item"><router-link to="/equipo">Equipo</router-link></div>
        <div class="menu-item"><router-link to="/portfolio">Portfolio</router-link></div>
        <div class="menu-item border-green-600 border-2" @mouseover="verMenu = true" @mouseleave="verMenu = false">
          <router-link to="/servicios">Servicios</router-link>
          <div class="submenu-item"  v-if="verMenu">
            <div class="h-5 w-full bg-green-600 ">mierda</div>
            <div class="h-5 w-full bg-green-600 ">mierda</div>
            <div class="h-5 w-full bg-green-600 ">mierda</div>
            <div class="h-5 w-full bg-green-600 ">mierda</div>
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
    font-size: 18px;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .submenu-item{
    position: absolute;
    width: 100%;
    padding-top: 8rem ;
  }

</style>