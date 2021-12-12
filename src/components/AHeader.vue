<style>
.blog-header {
    height: 60px;
    background-color: #FFF;
}

.blog-header.with-margin {
    margin-bottom: 40px;
}

.blog-header .logo-img {
    width: 80px;
    margin-right: 50px;
}

.category-link {
    padding: 0 20px;
    font-weight: 700;
}

.category-link:hover {
    background-color: #f4f5ff;
}

.category-link.current-category {
    background-color: #E6EBFA;
    color: var(--main-color);
}
</style>

<template>
    <header class="blog-header">
        <div class="layout-inner flex justify-between h-full">

            <div class="flex align-center">
                <router-link to="/">
                    <img src="@/assets/logo.png" alt="logo" class="logo-img">
                </router-link>

                <div class="blog-category h-full flex">

                    <router-link
                        v-for="category in $root.categories"

                        :to="'/category/' + category.id"
                        class="category-link center h-full"
                    >{{ category.title }}</router-link>


                    <!--                            current-category-->

                    <!--                    <router-link to="/category" class="category-link center h-full">PS教程</router-link>-->
<!--                    <router-link to="/category" class="category-link center h-full">网页设计</router-link>-->
<!--                    <router-link to="/category" class="category-link center h-full">平面设计</router-link>-->
                </div>
            </div>


            <router-link
                to="/my"
                v-if="$root.user"
                class="center"
            >Hi, {{ $root.user.name }}
            </router-link>

            <router-link
                to="/login"
                class="center"
                v-else
            >点此登录后一起琢磨~
            </router-link>

        </div>
    </header>
</template>