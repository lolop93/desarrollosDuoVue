<template>
  <div class="contenedor flex flex-col w-full h-full mb-40">
    <div class="main w-full">
      <div class="titulo flex content-center justify-center flex-col w-full h-1/6 bg-white shadow-2xl my-6">
        <h1 class="text-gray-700 font-bold italic text-7xl" style="font-family: Crete">Mens sana in papa con huevo</h1>
      </div>

      <div class="contenedor-cards w-full h-full bg-white shadow-2xl py-5 ">
        <h1 class="text-gray-700 text-5xl font-semibold" style="font-family: Crete">Main</h1>
        <h1 class="text-gray-700 text-3xl font-medium my-8" style="font-family: Crete">Servicios</h1>
        <div class="gridMain grid grid-cols-3 gap-x-16  w-full h-full px-16 mb-20">
          <div class=" cositas bg-gray-700 h-96 w-full shadow-2xl rounded-3xl"></div>
          <div class=" cositas bg-gray-700 h-96 w-full shadow-2xl rounded-3xl"></div>
          <div class=" cositas bg-gray-700 h-96 w-full shadow-2xl rounded-3xl"></div>
          <div class=" cositas bg-gray-700 h-96 w-full shadow-2xl rounded-3xl"></div>
          <div class=" cositas bg-gray-700 h-96 w-full shadow-2xl rounded-3xl"></div>
          <div class=" cositas bg-gray-700 h-96 w-full shadow-2xl rounded-3xl"></div>
        </div>

      </div>
    </div>


  </div>


</template>

<style scoped>
.cositas{
  background-image: url("../assets/manu.png");
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
}
</style>
