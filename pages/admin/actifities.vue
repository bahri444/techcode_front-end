<template>
  <div>
    <NuxtLayout name="sidebar">
      <div class="container">
        <p class="font-semibold text-center mt-2 mb-5 `">Member actifities</p>
        <!-- {{ data_actifity }} -->
        <table class="table-fixed border-2 border-slate-700">
          <thead>
            <tr>
              <th>Actifity uuid</th>
              <th>Kategories uuid</th>
              <th>Actifity name</th>
              <th>Actifity pictures</th>
              <th>Description</th>
              <th>Place actifity</th>
              <th>Start date</th>
              <th>End time</th>
              <th>Actifity status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="rows in data_actifity"
              :key="rows.actifity_uuid"
              class="border-2 border-slate-700">
              <td>{{ rows.actifity_uuid }}</td>
              <td>{{ rows.actifity_categories_uuid }}</td>
              <td>{{ rows.actifity_name }}</td>
              <td>{{ rows.actifity_foto }}</td>
              <td>{{ rows.description }}</td>
              <td>{{ rows.place_actifity }}</td>
              <td>{{ rows.start_date }}</td>
              <td>{{ rows.end_date }}</td>
              <td>{{ rows.actifity_status }}</td>
              <td>Edit | Hapus</td>
            </tr>
          </tbody>
        </table>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
  const { data: data_actifity, error } = await useFetch(
    "http://127.0.0.1:8000/api/actifities"
  );
  definePageMeta({
    layout: false,
  });
</script>

<style lang="scss" scoped></style>
