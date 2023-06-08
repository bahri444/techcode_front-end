<script>
  export default {};
</script>
<template>
  <div id="app">
    <NuxtLayout :name="layout"
      ><NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <slot />
  </div>
</template>
