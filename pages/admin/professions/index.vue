<template>
  <div>
    <NuxtLayout name="sidebar">
      <div class="container">
        <p class="font-semibold text-center mt-2 mb-5">Profession</p>
        <NuxtLink
          to="/admin/professions/addprofession"
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
        <table class="w-full text-sm text-left text-slate-500">
          <thead
            class="bg-slate-100 text-xs border-b text-slate-700 uppercase hover:bg-slate-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-4">profession uuid</th>
              <th scope="col" class="px-6 py-4">profession name</th>
              <th scope="col" class="px-6 py-4">created at</th>
              <th scope="col" class="px-6 py-4">updated at</th>
              <th scope="col" class="px-6 py-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="vals in profession"
              :key="vals.modul_categories_uuid"
              class="bg-white border-b hover:bg-slate-100 text-center">
              <td class="px-6 py-4">{{ vals.profession_uuid }}</td>
              <td class="px-6 py-4">{{ vals.profession_name }}</td>
              <td class="px-6 py-4">{{ vals.created_at }}</td>
              <td class="px-6 py-4">{{ vals.updated_at }}</td>
              <td class="text-center px-6 py-4">
                <div class="grid lg:grid-cols-2 md:grid-cols-1 w-44 mx-auto">
                  <!-- BUTTON EDIT -->
                  <NuxtLink
                    :to="'/admin/professions/update/' + vals.profession_uuid"
                    class="py-1 w-11 bg-blue-500 border-slate-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-1">
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
                  <!-- BUTTON DELETE -->
                  <button
                    type="button"
                    @click="
                      ($event) => DeleteProfession($event, vals.profession_uuid)
                    "
                    class="py-1 w-11 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-1">
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
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
  const BaseUrl = "https://elearning.ukmtechcode.com";
  import axios from "axios";
  definePageMeta({ layout: false });
  export default {
    name: "vals",
    data() {
      return {
        deleteByUuid: "",
        profession: {},
      };
    },
    mounted() {
      this.GetDataProfessions();
    },
    methods: {
      GetDataProfessions() {
        axios.get(BaseUrl + "/api/getallprofessions").then((res) => {
          this.profession = res.data;
        });
      },
      //   function delete
      DeleteProfession(event, deleteByUuid) {
        if (confirm("apakah anda yakin inngin menghapus data ini ?")) {
          event.target.innerText = "Deleting";
          axios
            .delete(BaseUrl + `/api/deleteprofessions/${deleteByUuid}`)
            .then((res) => {
              event.target.innerText = "delete";
              this.GetDataProfessions();
            });
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
