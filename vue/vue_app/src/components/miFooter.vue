<template>
  <div class=" contenedor bg-duogrey flex w-full justify-center items-center">
    <div class="pattern w-full"></div>
      <img src="../assets/fbIcon.png" class="w-10 h-10 mx-5 ">
      <img src="../assets/TwtIcon.png" class="w-10 h-10 mx-5 ">
      <img src="../assets/InstaIcon.png" class="w-10 h-10 mx-5 ">

  </div>
</template>

<script>
export default {
  name: "miFooter",
  data(){
    return{

    }
  }

}
</script>

<style scoped>
  .contenedor{
    height: 6.25rem;
  }
  @keyframes footer {
    from{background-position: 0 0}
    to{background-position: 10000% 0}
  }
  .pattern{
    height: 6.25rem;
    overflow: auto;
    position: absolute;
    background-image: url("../assets/pattern.png");
    background-repeat: repeat;
    background-size: 60px 60px;
    opacity: 10%;
    z-index: 0;
    animation-name: footer;
    animation-duration: 1000s;
    animation-iteration-count: infinite;
    animation-timing-function: linear ;
  }
  img{
    z-index: 10;
  }
</style>