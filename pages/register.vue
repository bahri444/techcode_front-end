<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="box bg-blue-50 sm:mx-auto sm:w-full sm:max-w-lg p-5 rounded">
      <!-- nama_lengkap	email	password	role	tanggal_lahir	jenis_kelamin	alamat	foto	github	jenis_anggota	status_anggota	angkatan -->
      <form>
        <div class="space-y-6">
          <h1 class="font-bold leading-7 text-gray-900 text-center">
            Register
          </h1>
          <div class="mt-3 grid grid-cols-1 gap-x-1 gap-y-3 sm:grid-cols-6">
            <!-- INPUT NIM -->
            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >NIM</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <!-- INPUT NAMA LENGKAP -->
            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Nama lengkap</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <!-- INPUT EMAIL -->
            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email</label
              >
              <div class="mt-2">
                <input
                  type="email"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <!-- INPUT PASSWORD -->
            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <!-- INPUT TANGGAL LAHIR -->
            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Tanggal lahir</label
              >
              <div class="mt-2">
                <input
                  type="date"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <!-- INPUT AKUN GITHUB -->
            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Github</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <!-- UPLOAD FOTO -->
            <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Foto formal</label
              >
              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 2MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- INPUT JENIS KELAMIN -->
        <div class="mt-6">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">
              Push Notifications
            </legend>
            <div class="mt-4 space-y-6">
              <div class="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label
                  for="push-everything"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Everything</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label
                  for="push-email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Same as email</label
                >
              </div>
            </div>
          </fieldset>
        </div>
        <!--  BUTTON AND LINK -->
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <NuxtLink
            to="/login"
            class="text-sm font-semibold leading-6 text-gray-900"
            >Login</NuxtLink
          >
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
            Register
          </button>
        </div>
        <!--  END-BUTTON AND LINK -->
      </form>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped></style>
