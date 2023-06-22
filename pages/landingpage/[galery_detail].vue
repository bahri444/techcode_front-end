<template>
  <div class="container mx-auto rounded-lg mt-10 md:flex px-4 grid grid-2">
    <div class="md:flex-shrink-0 md:mx-auto lg:w-1/2 sm:2/3">
      <img
        class="rounded-md md:w-80 lg:w-full lg:h-auto md:h-80"
        :src="'http://127.0.0.1:8000' + data_actifity.actifity_foto"
        alt="404" />
    </div>
    <div class="mt-2 md:mt-5 md:ml-6 lg:w-1/2 mx-auto">
      <h1 class="text-3xl font-semibold text-slate-800 md:text-2xl sm:text-1xl">
        {{ data_actifity.actifity_name }} {{ data_actifity.place_actifity }}
      </h1>
      <p class="mt-2 text-slate-700 text-justify lg:w-full md:w-full">
        {{ data_actifity.description }}
      </p>
      <p class="text-slate-600 mt-5">
        {{ data_actifity.start_date }} s.d {{ data_actifity.end_date }}
      </p>
    </div>
  </div>
</template>

<script setup>
  const { galery_detail } = useRoute().params;
  const URLGalery = "http://127.0.0.1:8000/api/getoneactifity/" + galery_detail;
  const { data: data_actifity } = await useFetch(URLGalery);
</script>

<style lang="scss" scoped></style>
