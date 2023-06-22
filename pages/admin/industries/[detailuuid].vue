<template>
  <div>
    <NuxtLayout name="sidebar">
      <div class="text-center text-blue-600">
        <h1 class="text-sm font-medium text-slate-800 md:text-2xl sm:text-1xl">
          Detail {{ industry.industry_name }}
        </h1>
      </div>
      <div class="container mx-auto rounded-lg mt-10 md:flex px-4 grid grid-2">
        <div class="md:flex-shrink-0 md:mx-auto lg:w-1/2 sm:2/3">
          <img
            class="rounded-md md:w-32 lg:w-64 lg:h-auto md:h-32"
            :src="'http://127.0.0.1:8000' + industry.industy_logo"
            alt="404" />
        </div>
        <div class="mt-2 md:mt-5 md:ml-6 lg:w-1/2 mx-auto">
          <p class="mt-2 text-slate-700 text-justify lg:w-full md:w-full">
            {{ industry.vision }}
          </p>
          <p class="mt-2 text-slate-700 text-justify lg:w-full md:w-full">
            {{ industry.mision }}
          </p>
          <p class="mt-2 text-slate-700 text-justify lg:w-full md:w-full">
            {{ industry.objective }}
          </p>
          <p class="mt-2 text-slate-700 text-justify lg:w-full md:w-full">
            {{ industry.social_media }}
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
  const { detailuuid } = useRoute().params;
  const UrlIndustries =
    "http://127.0.0.1:8000/api/getindustriesbyuuid/" + detailuuid;
  const { data: industry } = await useFetch(UrlIndustries);
  console.log(industry);
  definePageMeta({ layout: false });
</script>

<style lang="scss" scoped></style>
