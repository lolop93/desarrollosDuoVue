<template>
  <div class="bg-gray-700 flex w-full fixed left-0 bottom-0 ">
    <div class=" contenedor flex w-full bg-gray-700  items-center my-8 ">
      <div class="flex justify-start w-1/2 px-6">
        <img src="../assets/fbIcon.png" class="w-10 h-10 mx-5 ">
        <img src="../assets/TwtIcon.png" class="w-10 h-10 mx-5 ">
        <img src="../assets/InstaIcon.png" class="w-10 h-10 mx-5 ">
      </div>
      <div class="flex justify-end w-1/2 px-6 text-white"><code>Copyright DuoCode 2022</code></div>

      <div class="pattern w-full h-full"></div>
    </div>
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

  @keyframes footer {
    from{background-position: 0 0}
    to{background-position: 10000% 0}
  }
  .pattern{
    height: 6.25rem;
    position: absolute;
    background-image: url("../assets/pattern 2.png");
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