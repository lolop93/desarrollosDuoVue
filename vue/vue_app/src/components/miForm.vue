<template>
<div class="flex justify-center">
  <form class=" flex flex-col justify-center content-center">
    <label class="font-bold" for="name">Nombre</label>
    <input class="bg-green-500 text-white pl-5 rounded-full" type="text" id="name" name="name" placeholder="Escribe tu nombre">
    <label class="font-bold" for="email">Email</label>
    <input class="bg-green-500 text-white pl-5 rounded-full" type="text" id="email" name="email" placeholder="Escribe tu email">
    <label class="font-bold" for="email">Contraseña</label>
    <input class="bg-green-500 text-white pl-5 rounded-full" type="password" id="contraseña" name="contraseña" placeholder="Escribe tu contraseña">
    <input class="w-full px-3 mt-3  bg-green-800 text-white hover:bg-green-500 cursor-pointer" type="submit" value="Submit">
  </form>

</div>
</template>

<script>
export default {
  name: "miForm"
}
</script>

<style scoped>
::placeholder{
  color: white;
  opacity: 40%;
}
</style>