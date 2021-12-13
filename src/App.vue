<template>
    <div id="app">
        <div class="page-transition flex flex-col start" ref="animationContainer">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
        </div>

        <router-view :key="$route.fullPath"/>
    </div>
</template>

<script>
export default {
    mounted() {
        window.animationContainer = this.$refs.animationContainer;
    },
}
</script>