<style>
.a-bread-crumb {
  font-size: 24px;
  margin-bottom: 1.5rem;
}

.a-bread-crumb a {
  color: var(--main-color);
}

.a-bread-crumb a:hover {
  color: var(--main-bright-color);
}

.a-bread-crumb .splitter {
  margin: 0 1rem;
}
</style>

<template>
  <div class="a-bread-crumb flex">
    <router-link to="/">UI/UX</router-link>
    <span class="splitter">/</span>
    <router-link to="/">教程</router-link>
    <span class="splitter">/</span>
    <span class="current">琢磨班-01</span>
  </div>
</template>

<script>

</script>