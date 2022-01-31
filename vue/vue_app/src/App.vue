<template>



  <div class="total flex flex-col h-full">
    <mi-header></mi-header>

    <div class="cuerpo w-full " style="flex:1 0 auto">
      <miForm></miForm>
      <router-view/>
    </div>
    <div class="flex content-center justify-center">
      <button @click="verFooter ? verFooter=false : verFooter=true" class=" bg-green-500 hover:bg-green-700 text-white h-6 w-24">Footer</button>
    </div>


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
import MiForm from "./components/miForm";
import MiHeader from "./components/miHeader";
export default {
  components: {MiHeader, MiForm, miFooter},
  data(){
    return{
      verFooter: true,
    };
  }
}
</script>