<template>
  <NuxtLayout name="sidebar">
    <div
      class="box bg-blue-50 sm:mx-auto sm:w-full sm:max-w-xl p-5 mt-5 rounded">
      <form @submit.prevent="AddClasses">
        <!-- JUDUL FORM -->
        <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-4">
          <h2
            class="text-center text-1xl font-bold leading-9 tracking-tight text-slate-900">
            ADD CLASS
          </h2>
        </div>
        <!-- END JUDUL FORM -->

        <!-- INPUT INDUSTRY NAME -->
        <div class="relative z-0 w-full mb-8 group">
          <select
            id="floating_password"
            v-model="classes.profession_uuid"
            name="floating_password"
            class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
            <!-- <option selected>select profession</option> -->
            <option v-for="row in profession" :value="row.profession_uuid">
              {{ row.profession_name }}
            </option>
          </select>
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Profession
          </label>
        </div>
        <!-- END-INPUT INDUSTRY NAME -->

        <!-- INPUT INDUSTRY LOGO -->
        <div class="relative z-0 w-full mb-8 group">
          <input
            type="text"
            name="floating_password"
            v-model="classes.class_name"
            id="floating_password"
            class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Class name
          </label>
        </div>
        <!-- END-INPUT INDUSTRY LOGO -->

        <!-- INPUT VISION -->
        <div class="relative z-0 w-full mb-8 group">
          <input
            type="number"
            name="floating_password"
            v-model="classes.price_class"
            id="floating_password"
            class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Price class
          </label>
        </div>
        <!-- END-INPUT VISION -->

        <!-- INPUT MISI -->
        <div class="relative z-0 w-full mb-8 group">
          <input
            type="number"
            name="floating_password"
            v-model="classes.class_duration"
            id="floating_password"
            class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Class duration
          </label>
        </div>
        <!-- END-INPUT MISI -->

        <!-- INPUT OBJECTIVE (TUJUAN) -->
        <div class="relative z-0 w-full mb-8 group">
          <input
            type="date"
            name="floating_password"
            v-model="classes.start_date"
            id="floating_password"
            class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Start date
          </label>
        </div>
        <!-- END-INPUT OBJECTIVE (TUJUAN) -->

        <!-- INPUT SOCIAL MEDIA -->
        <div class="relative z-0 w-full mb-8 group">
          <input
            type="date"
            name="floating_password"
            v-model="classes.end_date"
            id="floating_password"
            class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            End date
          </label>
        </div>
        <!-- END-INPUT SOCIAL MEDIA -->

        <!--  BUTTON AND LINK -->
        <div class="mt-4 flex items-center justify-end gap-x-6">
          <NuxtLink
            to="/admin/kelas"
            class="text-sm font-semibold leading-6 text-slate-50 bg-orange-500 rounded-md flex items-center p-2 space-x-3 hover:bg-orange-400 to-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#f1f5f9"
              viewBox="0 0 64 64"
              id="back">
              <path
                fill="#f1f5f9"
                d="M20.86 33a2 2 0 0 1-1.26-.45L8.74 23.58a2 2 0 1 1 2.54-3.09l10.86 8.93a2 2 0 0 1 .27 2.81 2 2 0 0 1-1.55.77Z"></path>
              <path
                fill="#f1f5f9"
                d="M10 24a2 2 0 0 1-1.27-3.55l10.87-8.88a2 2 0 0 1 2.54 3.09l-10.86 8.92A2 2 0 0 1 10 24Z"></path>
              <path
                fill="#f1f5f9"
                d="M39.57 52.89H10a2 2 0 1 1 0-4h29.57a12.43 12.43 0 0 0 0-24.85H10a2 2 0 1 1 0-4h29.57a16.43 16.43 0 0 1 0 32.85Z"></path>
            </svg>
            Back
          </NuxtLink>
          <button
            type="submit"
            class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 flex items-center p-2 space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#f1f5f9"
              viewBox="0 0 100 100"
              id="save">
              <path
                d="M82.4 24.3l-9.8-9.8c-.4-.4-.9-.6-1.4-.6H19c-1.1 0-2 .9-2 2v68c0 1.1.9 2 2 2h62c1.1 0 2-.9 2-2V25.8c0-.6-.2-1.1-.6-1.5zM31 18h38v32H31V18zm48 64H21V18h6v34c0 1.1.9 2 2 2h42c1.1 0 2-.9 2-2V20.6l6 6V82zM64.8 24.5v19c0 1.1-.9 2-2 2s-2-.9-2-2v-19c0-1.1.9-2 2-2s2 .9 2 2z"></path>
              <path
                fill="#f1f5f9"
                d="M1504-930V754H-280V-930h1784m8-8H-288V762h1800V-938z"></path>
            </svg>
            Save
          </button>
        </div>
        <!--  END-BUTTON AND LINK -->
      </form>
    </div>
  </NuxtLayout>
</template>

<script>
  import axios from "axios";
  const BaseUrl = "https://elearning.ukmtechcode.com";
  definePageMeta({ layout: false });
  export default {
    data() {
      return {
        profession: {},
        classes: {
          profession_uuid: "",
          class_name: "",
          price_class: "",
          class_duration: "",
          start_date: "",
          end_date: "",
        },
      };
    },
    mounted() {
      // define function get all profession
      this.GetAllProfession();
    },
    methods: {
      // function get all profession
      GetAllProfession() {
        axios.get(BaseUrl + "/api/getallprofessions").then((res) => {
          this.profession = res.data;
        });
      },

      //   functin add class
      AddClasses() {
        axios.post(BaseUrl + "/api/addclass", this.classes).then((res) => {
          alert("aded data successfuly");
          this.classes.profession_uuid = "";
          this.classes.class_name = "";
          this.classes.price_class = "";
          this.classes.class_duration = "";
          this.classes.start_date = "";
          this.classes.end_date = "";
        });
      },
    },
  };
</script>

<style lang="scss" scoped></style>
