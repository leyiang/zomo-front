<template>
    <div id="app">
        <div class="page-transition flex flex-col">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
        </div>

        <router-view :key="$route.fullPath"/>
    </div>
</template>