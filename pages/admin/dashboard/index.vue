<template>
  <div>
    <NuxtLayout name="sidebar">
      <p class="font-semibold text-center mt-2 mb-5">Dashboard</p>
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-md">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total users
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">12,00</div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-md">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total Profit
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">$ 450k</div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-md">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total Orders
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">20k</div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: false,
  });
</script>

<style lang="scss" scoped></style>
