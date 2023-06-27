<template>
  <div>
    <NuxtLayout name="sidebar">
      <div class="text-center text-blue-600">
        <h1 class="text-sm font-medium text-slate-800 md:text-2xl sm:text-1xl">
          Modul {{ moduls.modul_title }}
        </h1>
      </div>
      <div class="container mx-auto rounded-lg mt-10 md:flex px-4 grid grid-2">
        <div class="md:flex-shrink-0 md:mx-auto lg:w-1/2 sm:2/3">
          <img
            class="rounded-md md:w-80 lg:w-full lg:h-auto md:h-80"
            :src="BaseUrl + moduls.modul_files"
            alt="404" />
        </div>
        <div class="mt-2 md:mt-5 md:ml-6 lg:w-1/2 mx-auto">
          <p class="mt-2 text-slate-700 text-justify lg:w-full md:w-full">
            {{ moduls.modul_to }}
          </p>
          <p class="text-slate-600 mt-5">
            {{ moduls.learn_state }} s.d {{ moduls.created_at }}
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
  const BaseUrl = "https://elearning.ukmtechcode.com";
  const { modul_uuid } = useRoute().params;
  const UrlModuls = BaseUrl + "/api/getmodulbyuuid/" + modul_uuid;
  const { data: moduls } = await useFetch(UrlModuls);
  console.log(moduls);
  definePageMeta({ layout: false });
</script>

<style lang="scss" scoped></style>
