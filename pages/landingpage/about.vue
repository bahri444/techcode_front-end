<template>
  <div class="container mx-auto">
    <div v-for="industry in industries" :key="industry.industry_uuid">
      <h1
        class="text-3xl font-semibold text-slate-800 md:text-2xl text-center py-5">
        {{ industry.industry_name }}
      </h1>
      <div class="rounded-lg">
        <div class="md:flex-shrink-0 mx-auto">
          <img
            class="rounded-md lg:w-80 md:w-80 lg:h-42 md:h-42 mx-auto"
            :src="MyUrl + industry.industy_logo"
            alt="Woman paying for a purchase" />
        </div>
        <div class="text-center mt-5 mx-auto">
          <h1 class="text-3xl font-semibold text-slate-800 md:text-2xl">
            {{ "Visi" }}
          </h1>
          <p
            class="mt-2 text-slate-700 lg:text-center md:text-justify lg:w-fullmd:w-5/3">
            {{ industry.vision }}
          </p>
        </div>
        <div class="text-center mt-5 mx-auto">
          <h1 class="text-3xl font-semibold text-slate-800 md:text-2xl">
            {{ "Misi" }}
          </h1>
          <p
            class="mt-2 text-slate-700 lg:text-center md:text-justify lg:w-full md:w-5/3">
            {{ industry.mision }}
          </p>
        </div>
        <div class="text-center mt-5 mx-auto">
          <h1 class="text-3xl font-semibold text-slate-800 md:text-2xl">
            {{ "Tujuan" }}
          </h1>
          <p
            class="mt-2 text-slate-700 lg:text-center md:text-justify lg:w-full md:w-5/3">
            {{ industry.objective }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const MyUrl = "https://elearning.ukmtechcode.com";
  const { data: industries } = await useFetch(MyUrl + "/api/getallindustries");
</script>

<style lang="scss" scoped></style>
