<template>
  <div class="container mx-auto">
    <p class="font-bold font-semibold text-center">Detail produk</p>
    <div
      class="container mx-auto w-96 h-full shadow-lg p-3 mt-8 rounded-md border-2 border-blue-600">
      <p class="font-semibold text-center">{{ products.title }}</p>
      <p><img :src="products.image" alt="404" class="w-40 h-48 mx-auto" /></p>
      <p>{{ products.name }}</p>
      <p>{{ products.category }}</p>
      <p class="text-justify">{{ products.description }}</p>
    </div>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
  const urlImage = "https://fakestoreapi.com/products/" + id;
  const { data: products } = await useFetch(urlImage);
</script>

<style lang="scss" scoped></style>
