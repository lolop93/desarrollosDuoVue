<template>



  <div class="total flex flex-col h-full">
    <mi-header></mi-header>

    <div class="cuerpo w-full " style="flex:1 0 auto">

    </div>
    <router-view/>


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
import MiHeader from "./components/miHeader";
export default {
  components: {MiHeader, miFooter},
  data(){
    return{
      verFooter: true,
    };
  }
}
</script>