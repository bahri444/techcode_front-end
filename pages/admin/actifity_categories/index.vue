<template>
  <div>
    <NuxtLayout name="sidebar">
      <div class="container">
        <p class="font-semibold text-center mt-2 mb-5">Actifity Categories</p>
        <NuxtLink
          to="/admin/actifity_categories/addcategories"
          class="flex mb-5 py-1 px-2 w-32 bg-blue-500 border-slate-700 text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f1f5f9"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            id="plus">
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#f1f5f9"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              transform="translate(2 2)">
              <line x1="10" x2="10" y1="6.327" y2="13.654"></line>
              <line x1="13.667" x2="6.333" y1="9.99" y2="9.99"></line>
              <path
                d="M14.6857143,0 L5.31428571,0 C2.04761905,0 0,2.31208373 0,5.58515699 L0,14.414843 C0,17.6879163 2.03809524,20 5.31428571,20 L14.6857143,20 C17.9619048,20 20,17.6879163 20,14.414843 L20,5.58515699 C20,2.31208373 17.9619048,0 14.6857143,0 Z"></path>
            </g>
          </svg>
          <span class="mt-1 ml-1"> Add data </span>
        </NuxtLink>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-slate-500">
            <thead
              class="bg-slate-100 text-xs border-b text-slate-700 uppercase hover:bg-slate-50 text-center">
              <tr>
                <th scope="col" class="px-6 py-4">No</th>
                <th scope="col" class="px-6 py-4">Uuid</th>
                <th scope="col" class="px-6 py-4">Category name</th>
                <th scope="col" class="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody id="example">
              <tr
                v-for="(row, index) in categories"
                :key="row.actifity_categories_uuid"
                class="bg-white border-b hover:bg-slate-100 text-center">
                <td class="px-6 py-4">{{ index + 1 }}</td>
                <td class="px-6 py-4">{{ row["actifity_categories_uuid"] }}</td>
                <td class="px-6 py-4">{{ row.actifity_categories_name }}</td>
                <td class="px-2 py-1 mx-auto">
                  <div class="grid lg:grid-cols-2 md:grid-cols-1 w-28 mx-auto">
                    <NuxtLink
                      :to="
                        '/admin/actifity_categories/update/' +
                        row.actifity_categories_uuid
                      "
                      class="py-1 w-11 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        fill="#f1f5f9"
                        width="30"
                        height="30"
                        class="mx-auto"
                        id="edit">
                        <path
                          d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"></path>
                        <path
                          d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"></path>
                      </svg>
                    </NuxtLink>
                    <button
                      type="button"
                      @click="
                        ($event) =>
                          deleteCategories($event, row.actifity_categories_uuid)
                      "
                      class="py-1 w-11 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#f1f5f9"
                        width="30"
                        height="30"
                        class="mx-auto"
                        id="trash">
                        <path
                          d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path>
                      </svg>
                    </button>
                    <NuxtLink> </NuxtLink>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script>
  //   import DataTable from "datatables.net-vue3";
  //   import DataTablesLib from "datatables.net";
  //   import "datatables.net-responsive";
  //   import "datatables.net-select";
  //   DataTable.use(DataTablesLib);

  //   const columns = [
  //     { data: "actifity_categories_uuid", title: "Uuid" },
  //     { data: "actifity_categories_name", title: "Actifity category name" },
  //   ];

  //   const options = {
  //     responsive: true,
  //     select: true,
  //   };

  //   let BaseUrl = `http://127.0.0.1:8000/api/actifity_categories`;
  //   var table = $("#example").DataTable({
  //     serverSide: true,
  //     ajax: BaseUrl,
  //     type: "GET",
  //   });
  //   table.search("Fiona");
  //   table.draw();

  //   data fetching
  //   const BaseUrl = "https://elearning.ukmtechcode.com";
  //   const { data: categories, index = 1 } = await useFetch(
  //     BaseUrl + `/api/actifity_categories`
  //   );
  import axios from "axios";
  const BaseUrl = "https://elearning.ukmtechcode.com";
  definePageMeta({ layout: false });
  export default {
    name: "row",
    data() {
      return {
        categories: {},
      };
    },
    mounted() {
      this.getDataCategories();
    },
    methods: {
      getDataCategories() {
        axios.get(BaseUrl + "/api/actifity_categories").then((res) => {
          this.categories = res.data;
        });
      },
      deleteCategories(event, categoriesUuid) {
        if (confirm("Apakah anda yakin ingin menghapus data ini ?")) {
          event.target.innerText = "Deleting";
          axios
            .delete(BaseUrl + `/api/delete_actifity_category/${categoriesUuid}`)
            .then((res) => {
              event.target.innerText = "Delete";
              this.getDataCategories();
            });
        }
      },
    },
  };
</script>
<style lang="scss" scoped></style>
