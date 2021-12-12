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
        <router-link to="/">琢磨</router-link>

        <template v-for="item in list">
            <span class="splitter">/</span>
            <router-link v-if="item.link" :to="item.link">{{ item.title }}</router-link>
            <span class="current" v-else>{{ item.title }}</span>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => ([]),
            required: true,
        }
    },


    created() {
        console.log(this.list);
    }
}
</script>