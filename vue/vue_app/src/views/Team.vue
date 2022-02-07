<template>
  <div class="contenedor py-12 mb-40">
    <h1 class="text-8xl" style="font-family: Crete">Equipo</h1>

    <div class="card-box grid grid-rows-2 gap-16 content-center justify-center mt-20">
      <div class="card shadow-2xl rounded-xl bg-gray-100 flex p-8" style="height: 300px">
        <div id="fotomanu" class="fotoyo mr-8 bg-red-500 shadow-2xl rounded-full h-32 w-32 flex flex-col content-center justify-center"></div>
        <div class="mt-8  flex flex-col text-left ">
          <h1 class=" text-4xl" style="font-family: Crete">Manolito Prieto Macías</h1>
          <p class="" style="font-family: Crete">Me llamo manolín, pero me suelen llamar oni-chan. Resulta que soy un poco otaku pero aún así queda gente que me quiere. O eso creo...</p>

        </div>
      </div>


      <div class="card shadow-2xl rounded-xl bg-gray-100 flex p-8">
        <div id="fotojaime" class="fotoyo mr-8 bg-red-500 shadow-2xl rounded-full h-32 w-32 flex flex-col content-center justify-center"></div>
        <div class="mt-8  flex flex-col text-left ">
          <h1 class=" text-4xl" style="font-family: Crete">Jaime aka Gatito Sumiso</h1>
          <p class="" style="font-family: Crete">Soy un poco maricón, pero se jugar al lol y un poco de css</p>

        </div>

      </div>


    </div>
  </div>

</template>

<script>



export default {
  name: 'Team,',
  components: {}
}
</script>
<style>
#fotomanu{
  background-image: url("../assets/manu.png");
  background-position: center;
  background-size: cover;
}
#fotojaime{
  background-image: url("../assets/jaime.png");
  background-position: center;
  background-size: cover;
}
</style>