<script setup>
import { onMounted, ref } from "vue";
import CardView from '@/components/layouts/Card.vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
document.title = "Extension Store"
const typeComic = ref(0)
import { dataExtension } from '@/utils/data'


const props = defineProps(["type"])
onMounted(() => {
    typeComic.value = props.type
})

</script>
<template>
    <div class="banner">
        <div class="banner_content">
            <a-carousel autoplay arrows>
                <template #prevArrow>
                    <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                        <left-circle-outlined />
                    </div>
                </template>
                <template #nextArrow>
                    <div class="custom-slick-arrow" style="right: 10px">
                        <right-circle-outlined />
                    </div>
                </template>
                <div>
                    <div class="item">
                        <img src="https://cdn2.cellphones.com.vn/1200x400/https://cdn.sforum.vn/sforum/wp-content/uploads/2023/06/extension-chrome-thumb.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div class="item">
                        <img src="https://d317jr06u12xtj.cloudfront.net/2023/01/Top-Chrome-Extensions-Social.png" alt="">
                    </div>
                </div>
                <div>
                    <div class="item">
                        <img src="https://wpmudev.com/blog/wp-content/uploads/2021/10/000-banner-Natasha.png" alt="">
                    </div>
                </div>
                <div>
                    <div class="item">
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/340568079/original/0d216518965c68084e1d4fa384516f8c57ca36b2/create-a-google-chrome-extension-in-48-hours.png" alt="">
                    </div>
                </div>
            </a-carousel>
        </div>
    </div>
    <div class="top-list">
        <div class="container">
            <section>
                <div class="title flex">
                    <h5><i class='bx bx-book-reader'></i> Newly updated extensions</h5>
                    <span class="view-all">
                        <RouterLink to="/new">View All</RouterLink>
                    </span>
                </div>
                <div class="row">
                    <CardView v-for="(item,index) of dataExtension" :data="item" />
                </div>
            </section>
            
        </div>
    </div>
</template>
<style scoped>
:deep(.slick-slide) {
    text-align: center;
    height: 260px;
    line-height: 260px;
    overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
}

:deep(.slick-slide h3) {
    color: #fff;
}

.item {
    text-align: center;
}

.item img {
    object-fit: cover;
    margin: auto;
    height: 260px;
}

.banner {
    background: rgba(192, 192, 192, 0.363);
    padding: 5px 0;
}

.view-all {
    margin-left: auto;
}
.view-all a{
    display: flex;
    align-items: center;
    text-decoration: underline;
}
section{
    padding: 10px 0;
}
@media only screen and (max-width: 450px) {
    .item img {
        width: 100%;
    }
}
</style>