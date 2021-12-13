<style>
.like {
    font-size: 1rem;
}

.like span:last-of-type {
    margin-left: -10px;
}

.heart-active {
    animation-timing-function: steps(28);
    animation-name: heart-burst;
    animation-duration: .8s;
    animation-iteration-count: 1;
    display: inline-block;
    animation-fill-mode: forwards;
}

@keyframes heart-burst {
    0% {
        background-position: left
    }

    100% {
        background-position: right
    }
}

.heart {
    width: 60px;
    height: 60px;
    display: inline-block;
    background-image: url("../assets/like.png");
}

.heart-wrap {
    background-color: transparent;
    border: none;
    padding: 0;
}
</style>

<template>
    <button
        class="like flex align-center ml-auto heart-wrap"
        @click="$emit('like')"
    >
        <span :class="['heart', active ? 'heart-active' : '' ]"></span>
        <span v-if="number">{{ like }}</span>
    </button>
</template>

<script>
export default {
    props: {
        like: {
            default: 0
        },

        active: {
            type: Boolean,
            default: false,
        },

        number: {
            type: Boolean,
            default: true,
        }
    }
}
</script>