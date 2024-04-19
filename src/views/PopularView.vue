<script setup>
document.title = "New extension"
import CardView from '@/components/layouts/Card.vue'
import { dataExtension } from '@/utils/data'
</script>
<template>
    <div class="container">
        <section>
            <div class="title flex">
                <h5><i class='bx bx-extension' ></i><span>&ensp;Most used</span></h5>
                <span class="view-all">
                    <!-- <RouterLink to="/new">See all</RouterLink> -->
                </span>
            </div>
            <div class="row">
                    <CardView v-for="(item,index) of dataExtension" :data="item" />
            </div>
        </section>

    </div>
</template>
<style scoped>

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
</style>