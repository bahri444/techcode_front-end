<template>
  <div>
    <NuxtLayout name="sidebar">
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <DataTable
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" class="px-6 py-3">No</th>
                <th scope="col" class="px-6 py-3">Uuid</th>
                <th scope="col" class="px-6 py-3">Category name</th>
                <th scope="col" class="px-6 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in data_categories"
                :key="row.actifity_categories_uuid"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                <td class="px-6 py-4">{{ index++ }}</td>
                <td class="px-6 py-4">{{ row.actifity_categories_uuid }}</td>
                <td class="px-6 py-4">{{ row.actifity_categories_name }}</td>
                <td class="px-6 py-4 text-center">
                  <NuxtLink
                    class="py-2 px-4 bg-blue-500 text-white mt-10 font-semibold rounded-lg shadow-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-1"
                    >Edit</NuxtLink
                  >
                  <NuxtLink
                    class="py-2 px-4 bg-orange-500 text-white mt-10 font-semibold rounded-lg shadow-md hover:bg-gradient-to-r from-orange-300 to-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-1"
                    >Hapus</NuxtLink
                  >
                </td>
              </tr>
            </tbody>
          </DataTable>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
  import DataTable from "datatables.net-vue3";

  const { data: data_categories, index = 1 } = await useFetch(
    `http://127.0.0.1:8000/api/actifity_categories`
  );

  definePageMeta({
    layout: false,
  });
</script>
<style lang="scss" scoped></style>
