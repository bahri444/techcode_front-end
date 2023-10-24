<template>
  <div>
    <NuxtLayout name="sidebar">
      <p class="font-semibold text-center mt-2 mb-5">Dashboard</p>
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-md">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total member
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">{{count_data.data_member}}</div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-md">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total moduls
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">{{count_data.data_modul}}</div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow-md">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total kelas
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">{{count_data.data_kelas}}</div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
  definePageMeta({
    layout: false,
  });
  import axios from 'axios';
  const BaseUrl = "https://elearning.ukmtechcode.com";
  export default {
    name: "data",
    data(){
      return{
        count_data:{}
      }
    },
    mounted(){
      this.getAllMember();
    },
    methods:{
      getAllMember(){
        axios.get(BaseUrl+"/api/getdatadashboard").then(res=>{
          this.count_data = res.data
        })
      }
    }
  }
</script>

<style lang="scss" scoped></style>
