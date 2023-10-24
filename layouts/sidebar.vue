<template>
  <div class="relative min-h-screen md:flex" data-dev-hint="container">
    <input type="checkbox" id="menu-open" class="hidden" />
    <!-- LOGO -->
    <label
      for="menu-open"
      class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
      data-dev-hint="floating action button">
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <!-- END LOGO -->

    <!-- NAVBAR VERSI TAB -->
    <header
      class="bg-blue-700 text-gray-100 flex justify-between md:hidden"
      data-dev-hint="mobile menu bar">
      <a
        href="#"
        class="block p-4 text-white font-bold whitespace-nowrap truncate">
        E - LEARNING
      </a>

      <label
        for="menu-open"
        id="mobile-menu-button"
        class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
        <svg
          id="menu-open-icon"
          class="h-6 w-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          id="menu-close-icon"
          class="h-6 w-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </header>
    <!-- END-NAVBAR VERSI TAB -->

    <!-- NAVBAR VERSI LAPTOP -->

    <aside
      id="sidebar"
      class="bg-blue-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto"
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
      <div
        class="flex flex-col space-y-6"
        data-dev-hint="optional div for having an extra footer navigation">
        <a href="#" class="text-white items-center mx-auto space-x-2 px-4">
          <img
            src="~/assets/images/logoukm.png"
            class="mx-auto"
            alt="404"
            width="80"
            height="80" />
          <span class="text-1xl font-extrabold whitespace-nowrap truncate">
            E - LEARNING
          </span>
        </a>

        <nav data-dev-hint="main navigation">
          <!-- MENU DASHBOARD -->
          <NuxtLink
            to="/admin/dashboard"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f1f5f9"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-100"
              id="dashboard">
              <path
                d="M15.29,10.29l-2.78,2.78A2.09,2.09,0,0,0,12,13a2,2,0,0,0-2,2,2.09,2.09,0,0,0,.07.51l-.78.78a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.78-.78A2.09,2.09,0,0,0,12,17a2,2,0,0,0,2-2,2.09,2.09,0,0,0-.07-.51l2.78-2.78a1,1,0,0,0-1.42-1.42ZM12,4A10,10,0,0,0,2,14a9.91,9.91,0,0,0,1.69,5.56,1,1,0,0,0,1.66-1.12,8,8,0,1,1,13.3,0,1,1,0,0,0,.27,1.39,1,1,0,0,0,.56.17,1,1,0,0,0,.83-.44A9.91,9.91,0,0,0,22,14,10,10,0,0,0,12,4Z"></path>
            </svg>
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Dashboard
            </span>
          </NuxtLink>
          <!-- MENU Actifity -->
          <NuxtLink
            to="/admin/actifity"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              fill="#f1f5f9"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-100"
              id="calendar11">
              <path
                d="M256.67 221.034v154.773h-38.538v-82.979c0-11.98-.286-19.183-.859-21.605-.572-2.42-2.145-4.253-4.723-5.498-2.573-1.24-8.315-1.863-17.217-1.863h-3.816v-18.045c18.631-4.017 32.782-12.279 42.449-24.783H256.67zM358.692 221.034v154.773h-38.538v-82.979c0-11.98-.286-19.183-.859-21.605-.572-2.42-2.145-4.253-4.723-5.498-2.573-1.24-8.315-1.863-17.217-1.863h-3.816v-18.045c18.631-4.017 32.782-12.279 42.448-24.783H358.692z"
                class="color000000 svgShape"></path>
              <path
                d="M475.437,258.401v177.93c0,15.952-13.144,28.929-29.301,28.929H104.077c-16.157,0-29.301-12.977-29.301-28.929v-177.93
              H59.443v177.93c0,24.407,20.022,44.262,44.634,44.262h342.059c24.612,0,44.634-19.855,44.634-44.262v-177.93H475.437z"
                class="color000000 svgShape"></path>
              <path
                d="M483.103,155.112H67.109c-4.235,0-7.667,3.431-7.667,7.667v230.397h15.333V170.445h400.661v180.243l-81.419,75.707
              H146.235v15.333h250.797c1.937,0,3.803-0.734,5.221-2.051l86.071-80.034c1.56-1.45,2.446-3.486,2.446-5.615V162.779
              C490.77,158.544,487.339,155.112,483.103,155.112z"
                class="color000000 svgShape"></path>
              <path
                d="M483.103,170.445H67.109c-4.235,0-7.667-3.431-7.667-7.667V93.213c0-24.407,20.022-44.262,44.634-44.262h342.059
              c24.612,0,44.634,19.855,44.634,44.262v69.565C490.77,167.014,487.339,170.445,483.103,170.445z M74.776,155.112h400.661V93.213
              c0-15.952-13.144-28.929-29.301-28.929H104.077c-16.157,0-29.301,12.977-29.301,28.929V155.112z"
                class="color000000 svgShape"></path>
              <path
                d="M195.114 111.429h-4.859c-15.281 0-27.711-12.341-27.711-27.512V34.349c0-15.171 12.431-27.512 27.711-27.512s27.714 12.341 27.714 27.512v22.276c0 4.235-3.431 7.667-7.667 7.667s-7.667-3.431-7.667-7.667V34.349c0-6.716-5.553-12.179-12.381-12.179-6.826 0-12.378 5.463-12.378 12.179v49.568c0 6.716 5.553 12.179 12.378 12.179h4.859c4.235 0 7.667 3.431 7.667 7.667C202.781 107.997 199.349 111.429 195.114 111.429zM364.814 111.429h-4.859c-15.281 0-27.714-12.341-27.714-27.512V34.349c0-15.171 12.433-27.512 27.714-27.512s27.714 12.341 27.714 27.512v22.276c0 4.235-3.431 7.667-7.667 7.667-4.235 0-7.667-3.431-7.667-7.667V34.349c0-6.716-5.553-12.179-12.381-12.179s-12.381 5.463-12.381 12.179v49.568c0 6.716 5.553 12.179 12.381 12.179h4.859c4.235 0 7.667 3.431 7.667 7.667C372.48 107.997 369.049 111.429 364.814 111.429zM396.69 437.611c-4.235 0-7.667-3.431-7.667-7.667v-70.796c0-10.095 8.206-18.308 18.293-18.308h72.752c4.235 0 7.667 3.431 7.667 7.667 0 4.235-3.431 7.667-7.667 7.667h-72.752c-1.632 0-2.96 1.335-2.96 2.975v70.796C404.357 434.179 400.925 437.611 396.69 437.611zM98.225 350.86c-42.529 0-76.995 34.541-76.995 77.139 0 42.622 34.466 77.164 76.995 77.164 42.505 0 76.971-34.542 76.971-77.164C175.197 385.401 140.73 350.86 98.225 350.86zM128.806 437.611H97.668c-4.235 0-7.667-3.431-7.667-7.667v-43.252c0-4.235 3.431-7.667 7.667-7.667s7.667 3.431 7.667 7.667v35.585h23.471c4.235 0 7.667 3.431 7.667 7.667C136.472 434.179 133.041 437.611 128.806 437.611z"
                class="color000000 svgShape"></path>
            </svg>
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Actifity
            </span>
          </NuxtLink>
          <!-- MENU INDUSTRIES -->
          <NuxtLink
            to="/admin/industries"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Industries
            </span>
          </NuxtLink>
          <!-- MENU AKUN USERS -->
          <NuxtLink
            to="/admin/users"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Akun users
            </span>
          </NuxtLink>
          <!-- MENU DATA KELAS -->
          <NuxtLink
            to="/admin/kelas"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Data kelas
            </span>
          </NuxtLink>
          <!-- MENU STUDENT CLASS -->
          <NuxtLink
            to="/admin/student_class"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Student class
            </span>
          </NuxtLink>
          <!-- MENU EBOOK CATEGORIES -->
          <NuxtLink
            to="/admin/modul_categories"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              E-Book categories
            </span>
          </NuxtLink>
          <!-- MENU EBOOK -->
          <NuxtLink
            to="/admin/moduls"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              E-Book
            </span>
          </NuxtLink>
          <!-- MENU QUESTION -->
          <NuxtLink
            to="/admin/questions"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Question
            </span>
          </NuxtLink>
          <!-- MENU Answers -->
          <NuxtLink
            to="/admin/answers"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Answers
            </span>
          </NuxtLink>
          <!-- MENU Professions -->
          <NuxtLink
            to="/admin/professions"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Profession
            </span>
          </NuxtLink>
          <!-- MENU Actifity categories -->
          <NuxtLink
            to="/admin/actifity_categories"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Actifity categories
            </span>
          </NuxtLink>
          <!-- MENU LOGOUT -->
          <NuxtLink
            to="#"
            class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-slate-400">
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
            <span class="text-gray-100 hover:text-blue-800 text-sm">
              Logout
            </span>
          </NuxtLink>
        </nav>
      </div>
      <!-- END - NAVBAR VERSI LAPTOP -->
    </aside>
    <main id="content" class="flex-1 p-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div class="rounded-sm">
          <slot />
        </div>
      </div>
      <!-- /End replace -->
    </main>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  const isOpen = ref(false);
</script>

<style lang="css" scoped>
  #sidebar {
    --tw-translate-x: -100%;
  }
  #menu-close-icon {
    display: none;
  }

  #menu-open:checked ~ #sidebar {
    --tw-translate-x: 10;
  }
  #menu-open:checked ~ * #mobile-menu-button {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
  }
  #menu-open:checked ~ * #menu-open-icon {
    display: none;
  }
  #menu-open:checked ~ * #menu-close-icon {
    display: block;
  }

  @media (min-width: 768px) {
    #sidebar {
      --tw-translate-x: 0;
    }
  }
</style>
