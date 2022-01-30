<template>



  <div class="total flex flex-col h-full">
    <div class="header w-full h-30" style="flex:0 0 auto">

      <div id="nav" class="bg-duogreen p-4">
        <router-link to="/"></router-link>
        <router-link to="/sobre">Sobre Nosotros</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/ola">ola</router-link>
      </div>

    </div>

    <div class="cuerpo w-full " style="flex:1 0 auto">
      <router-view/>
    </div>
    <button @click="verFooter ? verFooter=false : verFooter=true" class=" bg-duogreen text-white h-6">FOOTER</button>

    <miFooter v-if="verFooter"></miFooter>


    </div>





</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import miFooter from "./components/miFooter";
export default {
  components: {miFooter},
  data(){
    return{
      verFooter: true,
    };
  }
}
</script>