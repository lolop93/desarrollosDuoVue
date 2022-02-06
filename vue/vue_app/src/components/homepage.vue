<template>
<div class="cuerpo flex w-full h-full bg-duogrey">
  <div class="main w-full">
    <div class="titulo flex content-center justify-center flex-col w-full h-1/6 bg-red-500 mt-10">
      <h1 class="text-white font-extrabold italic text-7xl">Eslogan</h1>
    </div>

    <div class="contenedor-cards w-full h-5/6 bg-blue-600 p-28">
      <h1 class="text-white text-5xl font-semibold">Main</h1>
      <h1 class="text-white text-3xl font-semibold mt-8">Servicios</h1>
      <div class="gridMain grid grid-cols-3 gap-5 w-full h-full p-16">
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "homepage"
}
</script>

<style scoped>

</style>