<style scoped>
.loading{
    width: 100%;
    padding: 20px;
    text-align: center;
}
.loading_icon{
    font-size: 3em;
}
</style>
<template>
    <div class="loading">
        <div class="loading_icon">
            <i class='bx bx-loader bx-spin bx-flip-vertical' ></i>
        </div>
        <div class="slogan">
            <!-- Đang tải dữ liệu<span v-for="item of dots">.</span> -->
        </div>
    </div>
</template>
<script setup>
import { onUnmounted, ref } from "vue";
const dots = ref(1)
let idSetInterval = setInterval(() => {
    dots.value += 1
    if(dots.value >= 6){
        dots.value = 1
    }
}, 500);
onUnmounted(()=>{
    clearInterval(idSetInterval)
})
</script>