<style>
.my-slider {
    height: 450px;
    background-color: #dedeef;
    user-select: none;
}

.my-slider.with-margin {
    margin-bottom: 40px;
}

.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>

<template>
    <div class="my-slider radius">
        <div class="slider-inner swiper-wrapper">
            <div class="swiper-slide">
                <img src="@/assets/slide-template.png" alt="png">
            </div>

            <div class="swiper-slide">
                <img src="@/assets/slide-template.png" alt="png">
            </div>

            <div class="swiper-slide">
                <img src="@/assets/slide-template.png" alt="png">
            </div>

            <div class="swiper-slide">
                <img src="@/assets/slide-template.png" alt="png">
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css"
export default {
    mounted() {
        const swiper = new Swiper(".my-slider", {});
    }
}
</script>