<script setup>
  import { ref } from "vue";

  const isOpen = ref(false);
</script>

<template>
  <div>
    <div class="flex">
      <div
        :class="isOpen ? 'w-38' : 'w-64'"
        class="flex flex-col h-screen p-3 duration-300 bg-blue-700 shadow">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <!-- TEKS JUDUL SIDEBAR -->
            <h2 class="text-xl font-bold text-white">E - LEARNING</h2>
            <!-- BUTTON JUSTIFY -->
            <button @click="isOpen = !isOpen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <!-- SEARCH -->
          <!-- <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center py-4">
              <button type="submit" class="p-2 focus:outline-none focus:ring">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              class="w-full py-2 pl-10 text-sm rounded-md focus:outline-none" />
          </div> -->
          <div class="flex-1">
            <ul class="pt-2 pb-4 space-y-1 text-sm">
              <!-- TEKS MENU -->
              <p class="text-gray-100 mt-5 mb-2">MENU</p>
              <!-- MENU DASHBOARD -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/dashboard"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f1f5f9"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-6 h-6 text-gray-100"
                    id="dashboard">
                    <path
                      d="M15.29,10.29l-2.78,2.78A2.09,2.09,0,0,0,12,13a2,2,0,0,0-2,2,2.09,2.09,0,0,0,.07.51l-.78.78a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.78-.78A2.09,2.09,0,0,0,12,17a2,2,0,0,0,2-2,2.09,2.09,0,0,0-.07-.51l2.78-2.78a1,1,0,0,0-1.42-1.42ZM12,4A10,10,0,0,0,2,14a9.91,9.91,0,0,0,1.69,5.56,1,1,0,0,0,1.66-1.12,8,8,0,1,1,13.3,0,1,1,0,0,0,.27,1.39,1,1,0,0,0,.56.17,1,1,0,0,0,.83-.44A9.91,9.91,0,0,0,22,14,10,10,0,0,0,12,4Z"></path>
                  </svg>
                  <span class="text-gray-100"> Dashboard </span>
                </NuxtLink>
              </li>
              <!-- MENU INDUSTRIES -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/industries"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    fill="#f1f5f9"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-6 h-6 text-gray-100"
                    id="building">
                    <path
                      d="M14,8h1a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Zm0,4h1a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2ZM9,8h1a1,1,0,0,0,0-2H9A1,1,0,0,0,9,8Zm0,4h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,8H20V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3V20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-8,0H11V16h2Zm5,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v5H6V4H18Z"></path>
                  </svg>
                  <span class="text-gray-100">Industries </span>
                </NuxtLink>
              </li>
              <!-- MENU USER MEMBER -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/users"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f1f5f9"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-6 h-6 text-gray-100"
                    id="account">
                    <path
                      d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
                  </svg>
                  <span class="text-gray-100"> Users </span>
                </NuxtLink>
              </li>
              <!-- MENU CLASS -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/kelas"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f1f5f9"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-6 h-6 text-gray-100">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span class="text-gray-100">Class </span>
                </NuxtLink>
              </li>
              <!-- MENU STUDENT CLASS -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/student_class"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f1f5f9"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-6 h-6 text-gray-100">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>

                  <span class="text-gray-100">Student class </span>
                </NuxtLink>
              </li>
              <!-- E-BOOKS CATEGORIES-->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/modul_categories"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#f1f5f9"
                    width="40"
                    height="40"
                    class="w-6 h-6"
                    id="book">
                    <path
                      d="M18,2H8A4,4,0,0,0,4,6V18a4,4,0,0,0,4,4H18a2,2,0,0,0,2-2V4A2,2,0,0,0,18,2ZM6,6A2,2,0,0,1,8,4H18V14H8a3.91,3.91,0,0,0-2,.56ZM8,20a2,2,0,0,1,0-4H18v4ZM10,8h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z"></path>
                  </svg>
                  <span class="text-gray-100">E-Book categories </span>
                </NuxtLink>
              </li>
              <!-- E-BOOKS -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/moduls"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#f1f5f9"
                    width="40"
                    height="40"
                    class="w-6 h-6"
                    id="book">
                    <path
                      d="M18,2H8A4,4,0,0,0,4,6V18a4,4,0,0,0,4,4H18a2,2,0,0,0,2-2V4A2,2,0,0,0,18,2ZM6,6A2,2,0,0,1,8,4H18V14H8a3.91,3.91,0,0,0-2,.56ZM8,20a2,2,0,0,1,0-4H18v4ZM10,8h4a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2Z"></path>
                  </svg>
                  <span class="text-gray-100"> E-Book</span></NuxtLink
                >
              </li>
              <!-- QUESTION-->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/questions"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#f1f5f9"
                    width="40"
                    height="40"
                    class="w-6 h-6 text-gray-100"
                    id="question">
                    <g data-name="Layer 2">
                      <path
                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z"
                        data-name="menu-arrow-circle"></path>
                    </g>
                  </svg>
                  <span class="text-gray-100"> Question </span>
                </NuxtLink>
              </li>
              <!-- ANSWERS -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/answers"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="#f1f5f9"
                    width="40"
                    height="40"
                    class="w-6 h-6 text-gray-100"
                    id="comment">
                    <g data-name="Layer 7">
                      <path
                        d="M25,2H7A6,6,0,0,0,1,8V18a6,6,0,0,0,6,6h8.68l9.74,6.82a1,1,0,0,0,1.56-1l-.85-6A6,6,0,0,0,31,18V8A6,6,0,0,0,25,2Zm4,16a4,4,0,0,1-4,4,1,1,0,0,0-1,1.14l.67,4.72-8.11-5.68A1,1,0,0,0,16,22H7a4,4,0,0,1-4-4V8A4,4,0,0,1,7,4H25a4,4,0,0,1,4,4Z"></path>
                      <path
                        d="M25 7H12a1 1 0 0 0 0 2H25a1 1 0 0 0 0-2zM25 12H7a1 1 0 0 0 0 2H25a1 1 0 0 0 0-2zM25 17H7a1 1 0 0 0 0 2H25a1 1 0 0 0 0-2z"></path>
                    </g>
                  </svg>
                  <span class="text-gray-100"> Answers</span>
                </NuxtLink>
              </li>
              <!-- MENU PROFESSION -->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/professions"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f1f5f9"
                    data-name="Layer 2"
                    viewBox="0 0 48 48"
                    stroke-width="1.5"
                    class="w-6 h-6 text-gray-100"
                    id="graduate">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M30.877 32.005a3.4 3.4 0 0 0-1.743-.355 3.072 3.072 0 0 0-.95.25l3.039 1.227a29.512 29.512 0 0 0-2.454 3.386A12.315 12.315 0 0 0 27.5 39.156a5.219 5.219 0 0 0-.321 2.324c1.45-.324 2.984-1.92 3.975-3.83a7.353 7.353 0 0 0 .978-4.018A2.218 2.218 0 0 0 30.877 32.005zM10.372 16.634v4.915L27.235 27.56h.01a33.269 33.269 0 0 0 3.861-.22c3.287-.48 5.416-1.4 5.416-2.368v-8.1L26.17 20.38z"></path>
                    <polygon
                      points="22.32 6.46 0 12.575 10.372 15.027 26.097 18.753 36.522 15.226 48 11.333 22.32 6.46"></polygon>
                    <path
                      d="M25.7,39.768c.021-.1.042-.219.062-.344s.063-.271.115-.417l.032-.094A15.359,15.359,0,0,1,27.433,35.7a16.88,16.88,0,0,1,1.252-1.826.419.419,0,0,0,.042-.063l-2.056-.824a7.6,7.6,0,0,0-1.221,1.7,13.808,13.808,0,0,0-1.114,2.423L.532,26.5l-.146.637c-.2.981-.146,2.024.491,2.285L25.983,41.375C25.638,41.114,25.555,40.54,25.7,39.768Z"></path>
                    <polygon
                      points=".045 24.569 .047 24.565 .041 24.562 .045 24.569"></polygon>
                    <path
                      d="M24.058 33.967c1.418-2.731 3.907-4.3 5.823-3.791l-.075-.028L3.581 20.786c-.975-.415-2.372.689-3.141 2.5a6.193 6.193 0 0 0-.393 1.28L23.579 35.052A9.347 9.347 0 0 1 24.058 33.967zM45.256 17.646V13.921l-1.566.522v3.2a1.881 1.881 0 0 0-1.116 1.722v1.325a1.894 1.894 0 1 0 3.788 0V19.368A1.872 1.872 0 0 0 45.256 17.646z"></path>
                  </svg>
                  <span class="text-gray-100"> Professions</span>
                </NuxtLink>
              </li>
              <!-- ACTIFITY CATEGORIES-->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/actifity_categories"
                  class="flex items-center p-2 space-x-3 rounded-md"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="activity">
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      class="w-6 h-6 text-gray-100"
                      transform="translate(2 1.5)">
                      <polyline
                        points="5.245 13.281 8.238 9.391 11.652 12.073 14.581 8.293"></polyline>
                      <circle cx="17.995" cy="2.7" r="1.922"></circle>
                      <path
                        d="M12.9244852,1.62013731 L5.6567506,1.62013731 C2.64530894,1.62013731 0.778032041,3.75286043 0.778032041,6.76430209 L0.778032041,14.846682 C0.778032041,17.8581237 2.60869567,19.9816935 5.6567506,19.9816935 L14.2608696,19.9816935 C17.2723113,19.9816935 19.1395882,17.8581237 19.1395882,14.846682 L19.1395882,7.80778036"></path>
                    </g>
                  </svg>
                  <span class="text-gray-100"> Actifity categories</span>
                </NuxtLink>
              </li>
              <!-- ACTIFITY-->
              <li class="rounded-sm">
                <NuxtLink
                  to="/admin/actifity"
                  class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="activity">
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      class="w-6 h-6 text-gray-100"
                      transform="translate(2 1.5)">
                      <polyline
                        points="5.245 13.281 8.238 9.391 11.652 12.073 14.581 8.293"></polyline>
                      <circle cx="17.995" cy="2.7" r="1.922"></circle>
                      <path
                        d="M12.9244852,1.62013731 L5.6567506,1.62013731 C2.64530894,1.62013731 0.778032041,3.75286043 0.778032041,6.76430209 L0.778032041,14.846682 C0.778032041,17.8581237 2.60869567,19.9816935 5.6567506,19.9816935 L14.2608696,19.9816935 C17.2723113,19.9816935 19.1395882,17.8581237 19.1395882,14.846682 L19.1395882,7.80778036"></path>
                    </g>
                  </svg>
                  <span class="text-gray-100"> Actifity</span>
                </NuxtLink>
              </li>
              <!-- MENU LOGOUT -->
              <li class="rounded-sm">
                <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-gray-100">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                  <span class="text-gray-100"> Logout </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-5">
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
