<template>
  <div>
    <NuxtLayout name="sidebar">
      <div
        class="box bg-blue-50 sm:mx-auto sm:w-full sm:max-w-xl p-5 mt-5 rounded">
        <!-- 'actifity_categories_uuid', 'actifity_name', 'actifity_foto', 'description', 'place_actifity', 'start_date', 'end_date', 'actifity_status', 'created_at', 'updated_id' -->
        <form>
          <!-- JUDUL FORM -->
          <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-4">
            <h2
              class="text-center text-1xl font-bold leading-9 tracking-tight text-slate-900">
              ADD ACTIFITIES
            </h2>
          </div>
          <!-- END JUDUL FORM -->

          <div class="grid md:grid-cols-2 md:gap-6">
            <!-- PILIH KATEGORI KEGIATAN -->
            <div class="relative z-0 w-full mb-5 group">
              <select
                id="floating_password"
                v-model="actifity_categories_uuid"
                name="floating_password"
                class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                <option selected>select actifity categories</option>
                <option value="{{  }}">{{ "testing" }}</option>
              </select>
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Actifity categories</label
              >
            </div>
            <!-- END-PILIH KATEGORI KEGIATAN -->
            <!-- INPUT NAMA KEGIATAN -->
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                v-model="actifity_name"
                id="floating_last_name"
                class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Actifity name</label
              >
            </div>
            <!-- END=INPUT NAMA KEGIATAN -->
          </div>

          <!-- UPLOAD FOTO KEGIATAN -->
          <div class="col-span-full mb-5">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-slate-900"
              >Actifity ficture</label
            >
            <div
              class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-2">
              <div class="text-center">
                <svg
                  class="mx-auto h-12 w-12 text-slate-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd" />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-slate-600">
                  <label
                    for="file-upload"
                    class="rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-400">
                    <span>Upload image</span>
                  </label>
                  <input type="file" id="file-upload" class="sr-only" />
                </div>
                <p class="text-xs leading-5 text-slate-600">
                  PNG, JPEG, GIF up to 2MB
                </p>
              </div>
            </div>
          </div>
          <!-- END UPLOAD PHOTO -->

          <!-- INPUT DESCRIPTION -->
          <div class="col-span-full mb-5">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Description</label
            >
            <textarea
              id="message"
              rows="4"
              v-model="description"
              class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Write your thoughts here..."></textarea>
          </div>
          <!-- END-INPUT DESCRIPTION -->

          <!-- INPUT DATE -->
          <div class="grid md:grid-cols-2 md:gap-6">
            <!-- INPUT TEMPAT KEGIATAN -->
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_password"
                v-model="place_actifity"
                id="floating_password"
                class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="input place actifity"
                required />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Place actifity</label
              >
            </div>
            <!-- END-INPUT TEMPAT KEGIATAN -->

            <!-- INPUT START DATE -->
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="floating_first_name"
                id="floating_first_name"
                v-model="start_date"
                class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Start date</label
              >
            </div>
            <!-- END INPUT START DATE -->
          </div>
          <!-- END-INPUT DATE -->

          <!-- INPUT GROUP -->
          <div class="grid md:grid-cols-2 md:gap-6">
            <!-- INPUT END DATE -->
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="floating_last_name"
                id="floating_last_name"
                v-model="end_date"
                class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >End date</label
              >
            </div>
            <!-- END INPUT END DATE -->

            <!-- INPUT JENIS KEGIATAN -->
            <div class="relative z-0 w-full mb-5 group">
              <select
                id="floating_password"
                name="floating_password"
                v-model="actifity_status"
                class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                <option selected>select actifity status</option>
                <option value="{{}}">{{ "testing" }}</option>
              </select>
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Password</label
              >
            </div>
            <!-- END-INPUT JENIS KEGIATAN -->
          </div>
          <!-- END-INPUT GROUP -->

          <!--  BUTTON AND LINK -->
          <div class="mt-4 flex items-center justify-end gap-x-6">
            <NuxtLink
              to="/admin/actifity"
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
              Back</NuxtLink
            >
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
          <!-- <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Phone number (123-456-7890)</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required />
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Company (Ex. Google)</label
              >
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button> -->
        </form>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: false,
  });
</script>

<style lang="scss" scoped></style>
