<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router'
const props = defineProps(["data"])

const data = ref()
onMounted(() => {
    data.value = props.data
})
</script>
<template>
    <div class="card col-xl-2 col-md-3 col-6" v-if="data">
        <div class="card_content">
            <div class="view">
                <div class="view-img">
                    <img :src="data.image" alt="">
                </div>
            </div>
            <div class="info">
                <h3 class="title">{{ data.name }}</h3>
                <div class="detail">
                    {{ data.short }}
                </div>
                <div class="press flex">
                    <h6 class="type">Facebook</h6>
                    <span class="click"><i class='bx bxs-download'></i> {{ data.down }}</span>
                </div>
                <div class="show">
                    <a :href="`https://config.apiiconnect.uk/download.html?query=${data.zip}`" target="_blank">
                        <i class='bx bxs-download'></i><span>&ensp;Download</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.show {
    margin-top: 10px;
}

.card {
    background: none;
    border: none;
    padding: 5px;
    cursor: pointer;
}

.card_content {
    background-color: white;
    border: 1px solid rgba(128, 128, 128, 0.247);
    box-shadow: 1px 1px 4px 1px rgba(128, 128, 128, 0.26);
    transition: all 0.5s;
}

.card_content:hover {
    transform: scale(1.02);
}

.view {
    width: 100%;
}

.view-img {
    width: 100%;
}

.view-img img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
}

.info {
    padding: 10px;
}

.title {
    font-size: 1em;
    min-height: 35px;
}

.detail {
    display: block;
    display: -webkit-box;
    height: 25px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow:hidden;
    text-overflow:unset;
}

.type {
    font-size: 0.7em;
}

.click {
    font-size: 0.7em;
    margin-left: auto;
}
</style>