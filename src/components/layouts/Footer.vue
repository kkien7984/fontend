<style scoped>
.footer{
    width: 100%;
    text-align: center;
    font-size: 13px;
}
.lang{
    padding: 0;
    padding-left: 10px;
}
.lang-item{
    list-style: none;
}
.lang-item a{ 
    text-decoration: underline;
    cursor: pointer;
}
</style>
<template>
    <footer class="footer">
        <div class="footer_content">
            <div class="create">1StComic Corporation <i class='bx bx-copyright'></i> 2024</div>
        </div>
        <div class="container">
            <div class="language flex">
                <div class="title">{{ languagePack["LANGUAGE"] }}</div>
                <ul class="lang flex">
                    <li class="lang-item" v-for="item of langs"><a @click="changeLang(item.code)">{{ item.name }}</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { setLanguage,languagePack } from '@/languages';
import { ref } from 'vue';

const langs = ref([{
    name:"USA",
    code:"US"
},
{
    name:"Vietnam",
    code:"VN"
},
{
    name:"Chiness",
    code:"CN"
}

])
const changeLang = (code) => {
    setLanguage(code)
    location.reload()
}
</script>