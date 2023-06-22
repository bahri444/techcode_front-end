<template>
  <div class="container mx-auto">
    <p class="text-center font-semibold mt-10 mb-10">hello produk</p>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="produk in products" class="border-b border-t">
        <NuxtLink :to="`/products/${produk.id}`"
          >{{ produk.title }}
          <p>Id. {{ produk.id }}</p>
          <p>Title. {{ produk.title }}</p>
          <p>Rp. {{ produk.price }}</p>
          <!-- <p>Deskripsi. {{ produk.description }}</p> -->
          <!-- <p>Deskripsi. {{ produk.images }}</p> -->
          <div>
            <img :src="produk.image" class="w-48 h-48" alt="404" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { data: products } = await useFetch(
    "https://fakestoreapi.com/products"
  );
</script>

<style lang="scss" scoped></style>
