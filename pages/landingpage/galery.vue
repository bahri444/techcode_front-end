<template>
  <div class="text-center py-5">
    <span
      class="text-center text-xl font-bold text-slate-800 md:text-2xl hover:text-blue-600">
      Galery
    </span>
  </div>
  <div
    class="lg:mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-5 md:mx-auto sm:mx-auto">
    <div v-for="actifity in data_actifity">
      <div>
        <div class="max-w-sm mx-auto">
          <NuxtLink :to="'/landingpage/' + actifity.actifity_uuid">
            <img
              class="rounded-t-lg mx-auto w-96 h-64"
              :src="MyUrl + actifity.actifity_foto"
              alt="" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const MyUrl = "https://elearning.ukmtechcode.com";
  const { data: data_actifity } = await useFetch(MyUrl + "/api/actifities");
</script>

<style lang="scss" scoped></style>
